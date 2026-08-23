import React from 'react';
const LABEL_2200 = 'component_2200';
export function Component2200({ value = 2200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2200, 'data-value': derived.doubled }, children);
}
export default Component2200;
