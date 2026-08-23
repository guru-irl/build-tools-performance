import React from 'react';
const LABEL_2411 = 'component_2411';
export function Component2411({ value = 2411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2411, 'data-value': derived.doubled }, children);
}
export default Component2411;
