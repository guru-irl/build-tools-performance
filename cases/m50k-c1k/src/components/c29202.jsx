import React from 'react';
const LABEL_29202 = 'component_29202';
export function Component29202({ value = 29202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29202, 'data-value': derived.doubled }, children);
}
export default Component29202;
