import React from 'react';
const LABEL_36579 = 'component_36579';
export function Component36579({ value = 36579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36579, 'data-value': derived.doubled }, children);
}
export default Component36579;
