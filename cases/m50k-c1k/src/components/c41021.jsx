import React from 'react';
const LABEL_41021 = 'component_41021';
export function Component41021({ value = 41021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41021, 'data-value': derived.doubled }, children);
}
export default Component41021;
