import React from 'react';
const LABEL_2900 = 'component_2900';
export function Component2900({ value = 2900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2900, 'data-value': derived.doubled }, children);
}
export default Component2900;
