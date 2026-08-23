import React from 'react';
const LABEL_35391 = 'component_35391';
export function Component35391({ value = 35391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35391, 'data-value': derived.doubled }, children);
}
export default Component35391;
