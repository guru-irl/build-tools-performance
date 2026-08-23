import React from 'react';
const LABEL_38570 = 'component_38570';
export function Component38570({ value = 38570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38570, 'data-value': derived.doubled }, children);
}
export default Component38570;
