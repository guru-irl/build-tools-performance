import React from 'react';
const LABEL_29957 = 'component_29957';
export function Component29957({ value = 29957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29957, 'data-value': derived.doubled }, children);
}
export default Component29957;
