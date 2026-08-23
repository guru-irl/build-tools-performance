import React from 'react';
const LABEL_11718 = 'component_11718';
export function Component11718({ value = 11718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11718, 'data-value': derived.doubled }, children);
}
export default Component11718;
