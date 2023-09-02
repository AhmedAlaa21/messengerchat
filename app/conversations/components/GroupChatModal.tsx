interface GroupChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({ isOpen, onClose }) => {
  return <div>Group Modal</div>;
};

export default GroupChatModal;
