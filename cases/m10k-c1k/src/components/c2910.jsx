import React from 'react';
const LABEL_2910 = 'component_2910';
export function Component2910({ value = 2910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2910, 'data-value': derived.doubled }, children);
}
export default Component2910;
