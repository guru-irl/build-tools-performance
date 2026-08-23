import React from 'react';
const LABEL_27827 = 'component_27827';
export function Component27827({ value = 27827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27827, 'data-value': derived.doubled }, children);
}
export default Component27827;
