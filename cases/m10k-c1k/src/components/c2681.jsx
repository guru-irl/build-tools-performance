import React from 'react';
const LABEL_2681 = 'component_2681';
export function Component2681({ value = 2681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2681, 'data-value': derived.doubled }, children);
}
export default Component2681;
