import React from 'react';
const LABEL_44995 = 'component_44995';
export function Component44995({ value = 44995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44995, 'data-value': derived.doubled }, children);
}
export default Component44995;
