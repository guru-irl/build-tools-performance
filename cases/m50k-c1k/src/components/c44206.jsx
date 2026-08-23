import React from 'react';
const LABEL_44206 = 'component_44206';
export function Component44206({ value = 44206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44206, 'data-value': derived.doubled }, children);
}
export default Component44206;
