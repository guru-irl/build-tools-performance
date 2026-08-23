import React from 'react';
const LABEL_2597 = 'component_2597';
export function Component2597({ value = 2597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2597, 'data-value': derived.doubled }, children);
}
export default Component2597;
