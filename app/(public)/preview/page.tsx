// preview page for newly created UI components
import Skeleton from "@/components/Skeleton"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Skeleton</h2>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>

      <h2 className="mt-8">Avatar</h2>
      <div className="flex items-center gap-4 mt-4">
        <Avatar name="Alice" />
        <Avatar name="JohnDoe" />
        <Avatar name="MaryJane" />
        <Avatar name="Bob" />
      </div>
    </div>
  )
}
