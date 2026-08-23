import React from 'react';
const LABEL_38612 = 'component_38612';
export function Component38612({ value = 38612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38612, 'data-value': derived.doubled }, children);
}
export default Component38612;
