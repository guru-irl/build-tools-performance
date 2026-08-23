import React from 'react';
const LABEL_2520 = 'component_2520';
export function Component2520({ value = 2520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2520, 'data-value': derived.doubled }, children);
}
export default Component2520;
