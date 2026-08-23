import React from 'react';
const LABEL_36997 = 'component_36997';
export function Component36997({ value = 36997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36997, 'data-value': derived.doubled }, children);
}
export default Component36997;
