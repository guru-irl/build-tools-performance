import React from 'react';
const LABEL_13507 = 'component_13507';
export function Component13507({ value = 13507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13507, 'data-value': derived.doubled }, children);
}
export default Component13507;
