import cl from 'classnames'

interface UserCardProps {
  avatarUrl: string
  name: string
  reposTotal: number
  className?: string
}

const UserCard: React.FC<UserCardProps> = ({ avatarUrl, name, reposTotal, className }) => (
  <div className={cl("userCard", className)}>
    <div className="imgBlock">
      <img src={avatarUrl} />
    </div>
    <div className="infoBlock">
      <h2>{name}</h2>
      <p>{reposTotal} repositories</p>
    </div>
  </div>
)

export default UserCard
