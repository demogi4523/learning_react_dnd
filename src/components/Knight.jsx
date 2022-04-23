import { useDrag, DragPreviewImage } from "react-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";

import { ItemTypes, COLORS } from "./types.js";
export default function Knight() {
  const [{isDragging}, drag, preview] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const knightImage = faChessKnight.icon;

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <span 
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
          top: '50%',
          right: '50%',
          position: 'absolute',
          transform: 'translate(50%, -50%)',
        }}>
          <FontAwesomeIcon icon={faChessKnight} style={{ color: COLORS.WHITE }} />
        </span>
    </>
  );
}
