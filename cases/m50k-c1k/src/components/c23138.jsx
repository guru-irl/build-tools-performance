import React from 'react';
const LABEL_23138 = 'component_23138';
export function Component23138({ value = 23138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23138, 'data-value': derived.doubled }, children);
}
export default Component23138;
