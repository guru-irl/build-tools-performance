import React from 'react';
const LABEL_2696 = 'component_2696';
export function Component2696({ value = 2696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2696, 'data-value': derived.doubled }, children);
}
export default Component2696;
