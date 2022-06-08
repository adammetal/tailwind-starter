export function Button({ color = "red-300", ...props }) {
  return (
    <button
      {...props}
      className={`text-blue-200 border-blue-200 border-2 text-base m-4 px-1 py-1 rounded-sm cursor-pointer`}
    />
  );
}

export function AlertButton(props) {
  return (
    <button
      {...props}
      className={`text-red-600 border-red-600 border-2 text-base m-4 px-1 py-1 rounded-sm cursor-pointer`}
    />
  );
}
