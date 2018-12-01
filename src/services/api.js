import openSocket from 'socket.io-client';
import axios from 'axios';

export const API_HOST = 'http://19582dc3.ngrok.io';

const socket = openSocket(API_HOST);

export function subscribeToTaskCreated(cb) {
  socket.on('task-created', task => cb(task));
}

export function subscribeToTaskUpdated(cb) {
  socket.on('task-updated', task => cb(task));
}

export function subscribeToTaskDone(cb) {
  socket.on('task-done', task => cb(task));
}

export function getAllTasks() {
  return axios.get(`${API_HOST}/tasks`);
}

export function addTask(task) {
  return axios.post(`${API_HOST}/tasks`, task);
}

export function taskDone(id) {
  return axios.post(`${API_HOST}/tasks/${id}/done`);
}
