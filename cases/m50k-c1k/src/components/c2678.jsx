import React from 'react';
const LABEL_2678 = 'component_2678';
export function Component2678({ value = 2678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2678, 'data-value': derived.doubled }, children);
}
export default Component2678;
