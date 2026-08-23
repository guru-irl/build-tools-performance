import React from 'react';
const LABEL_40021 = 'component_40021';
export function Component40021({ value = 40021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40021, 'data-value': derived.doubled }, children);
}
export default Component40021;
