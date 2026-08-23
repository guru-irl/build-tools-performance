import React from 'react';
const LABEL_44058 = 'component_44058';
export function Component44058({ value = 44058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44058, 'data-value': derived.doubled }, children);
}
export default Component44058;
