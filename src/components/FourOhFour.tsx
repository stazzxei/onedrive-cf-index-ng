import Image from 'next/image'

const FourOhFour: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  return (
    <div className="my-12">
      <div className="mx-auto w-1/3">
        <Image src="/images/fabulous-rip-2.png" alt="404" width={912} height={912} priority />
      </div>
      <div className="mx-auto mt-6 max-w-xl text-gray-500">
        <div className="mb-8 text-xl font-bold">
          Oops, that&apos;s a <span className="underline decoration-red-500 decoration-wavy">four-oh-four</span>.
        </div>
        <div className="mb-4 overflow-hidden break-all rounded border border-gray-400/20 bg-gray-50 p-2 font-mono text-xs dark:bg-gray-800">
          {errorMsg}
        </div>
        <div className="text-sm">
          Error URL or File not found. Press{' '}
          <kbd className="rounded border border-gray-400/20 bg-gray-100 px-1 font-mono text-xs dark:bg-gray-800">
            F12
          </kbd>{' '}
          and open devtools for more details.
        </div>
      </div>
    </div>
  )
}

export default FourOhFour
