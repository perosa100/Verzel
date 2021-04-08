import { Container } from './styles'
import { FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import DeleteTask from '../DeleteTask'
import DoneTask from '../DoneTask'
import ShowTask from '../ShowTask'
import { ADD_USER, ADD_USERS } from '../../store/reducers/type'
import UpdateTask from '../UpdateTask'
import { spawn } from 'node:child_process'

const ListTask = () => {
    const user_id: string = useSelector((state: ADD_USERS) => state.logger.id)

    let users = useSelector((state: ADD_USERS) => state.users)

    const user = users.filter((user) => user.id === user_id)

    const markConlusition = (task: any) => {
        return task.done ? 'line-through' : 'none'
    }

    return (
        <Container>
            <tr>
                <th>
                    <span>Tarefa</span>
                </th>
                <th>
                    <span> Ações </span>
                </th>
            </tr>

            {user[0].tasks === []
                ? user[0].tasks.map((task: any) => (
                      <>
                          {' '}
                          <tr key={task.id}>
                              <td
                                  style={{
                                      textDecoration: markConlusition(task)
                                  }}
                              >
                                  <span> {task.name}</span>
                              </td>
                              <td>
                                  <ShowTask tasks={task} />
                                  &nbsp;
                                  {!task.done && (
                                      <span
                                          className={
                                              task.done ? 'display: none' : ''
                                          }
                                      >
                                          <DoneTask tasks={task} />
                                      </span>
                                  )}
                                  &nbsp;
                                  <UpdateTask tasks={task} />
                                  &nbsp;
                                  <DeleteTask tasks={task} />
                              </td>
                          </tr>
                      </>
                  ))
                : ''}
        </Container>
    )
}

export { ListTask }
