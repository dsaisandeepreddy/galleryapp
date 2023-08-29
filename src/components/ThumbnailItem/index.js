// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateThumbail} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const clickThumbail = () => {
    updateThumbail(id)
  }

  return (
    <ul>
      <li className="imageflex-container" key={id}>
        <button type="button" onClick={clickThumbail} key={id}>
          <img src={thumbnailUrl} alt={thumbnailAltText} />
        </button>
      </li>
    </ul>
  )
}

export default ThumbnailItem
