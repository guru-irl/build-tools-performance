import React from 'react';
const LABEL_36098 = 'component_36098';
export function Component36098({ value = 36098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36098, 'data-value': derived.doubled }, children);
}
export default Component36098;
