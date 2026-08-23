import React from 'react';
const LABEL_32540 = 'component_32540';
export function Component32540({ value = 32540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32540, 'data-value': derived.doubled }, children);
}
export default Component32540;
