import React from 'react';
const LABEL_34435 = 'component_34435';
export function Component34435({ value = 34435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34435, 'data-value': derived.doubled }, children);
}
export default Component34435;
