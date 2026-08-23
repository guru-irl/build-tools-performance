import React from 'react';
const LABEL_21021 = 'component_21021';
export function Component21021({ value = 21021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21021, 'data-value': derived.doubled }, children);
}
export default Component21021;
