import React from 'react';
const LABEL_29353 = 'component_29353';
export function Component29353({ value = 29353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29353, 'data-value': derived.doubled }, children);
}
export default Component29353;
