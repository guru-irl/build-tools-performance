import React from 'react';
const LABEL_10138 = 'component_10138';
export function Component10138({ value = 10138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10138, 'data-value': derived.doubled }, children);
}
export default Component10138;
