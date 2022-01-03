import dynamic from 'next/dynamic';

export default function IndexPage() {
  const EditorComponent = dynamic(() => import('@src/frontend/editor/Editor'), { ssr: false });

  return <EditorComponent />;
}
