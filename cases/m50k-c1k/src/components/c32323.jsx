import React from 'react';
const LABEL_32323 = 'component_32323';
export function Component32323({ value = 32323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32323, 'data-value': derived.doubled }, children);
}
export default Component32323;
