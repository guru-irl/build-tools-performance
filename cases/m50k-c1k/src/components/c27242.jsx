import React from 'react';
const LABEL_27242 = 'component_27242';
export function Component27242({ value = 27242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27242, 'data-value': derived.doubled }, children);
}
export default Component27242;
