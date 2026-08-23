import React from 'react';
const LABEL_35678 = 'component_35678';
export function Component35678({ value = 35678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35678, 'data-value': derived.doubled }, children);
}
export default Component35678;
