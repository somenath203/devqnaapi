const Title = ({ title }) => {
  return (
    <div>
      <p className="text-lg lg:text-3xl font-bold text-gray-900 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-16 h-1 rounded-full bg-amber-500"></span>
      </p>
    </div>
  )
}

export default Title;