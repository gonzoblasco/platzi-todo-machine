import './TodosLoading.css'

const TodosLoading = () => (
  <div className="LoadingTodo-container">
    <span className="LoadingTodo-completeIcon" />
    <p className="LocadingTodo-text">Cargando TODOs...</p>
    <span className="LoadingTodo-deleteIcon" />
  </div>
)

export { TodosLoading }
