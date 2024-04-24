const imageUrl = 'https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg'

const ChannelAvatar = ({url}) => {
    return(
        <div className="channels-avatar-cointainer">
            <img src="{url ? url : imageUrl}" width='100%' height='100%' alt="userImage" />
        </div>
    )
}

export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }

    return(
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    )
}