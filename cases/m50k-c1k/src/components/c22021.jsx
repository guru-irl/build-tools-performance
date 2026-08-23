import React from 'react';
const LABEL_22021 = 'component_22021';
export function Component22021({ value = 22021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22021, 'data-value': derived.doubled }, children);
}
export default Component22021;
