import React from 'react';
const LABEL_29812 = 'component_29812';
export function Component29812({ value = 29812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29812, 'data-value': derived.doubled }, children);
}
export default Component29812;
