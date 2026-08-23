import React from 'react';
const LABEL_21789 = 'component_21789';
export function Component21789({ value = 21789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21789, 'data-value': derived.doubled }, children);
}
export default Component21789;
