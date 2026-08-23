import React from 'react';
const LABEL_32435 = 'component_32435';
export function Component32435({ value = 32435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32435, 'data-value': derived.doubled }, children);
}
export default Component32435;
