import React from 'react';
const LABEL_39296 = 'component_39296';
export function Component39296({ value = 39296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39296, 'data-value': derived.doubled }, children);
}
export default Component39296;
