import React from 'react';
const LABEL_16021 = 'component_16021';
export function Component16021({ value = 16021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16021, 'data-value': derived.doubled }, children);
}
export default Component16021;
