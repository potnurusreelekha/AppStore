// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveId(tabId)
  }

  const tabItemClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-list">
      <button type="button" className={tabItemClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
