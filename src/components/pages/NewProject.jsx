import { useNavigate } from 'react-router'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

const NewProject = () => {
  const navegation = useNavigate()

  const createPost = (project) => {
    //initialize const and service
    project.cost = 0
    project.services = []

    const url = 'http://localhost:5000/projects'

    fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(project)
    })
      .then((resp => resp.json()))
      .then(data => {
        // Redirect
        navegation('/projects', { message: 'Projeto criado com sucesso!' })
      })
      .catch((err) => console.log(err))

  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
    </div>
  )
}

export default NewProject