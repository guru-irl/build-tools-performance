import React from 'react';
const LABEL_21559 = 'component_21559';
export function Component21559({ value = 21559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21559, 'data-value': derived.doubled }, children);
}
export default Component21559;
