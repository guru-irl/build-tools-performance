import React from 'react';
const LABEL_43389 = 'component_43389';
export function Component43389({ value = 43389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43389, 'data-value': derived.doubled }, children);
}
export default Component43389;
