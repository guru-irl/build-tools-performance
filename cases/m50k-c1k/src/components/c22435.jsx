import React from 'react';
const LABEL_22435 = 'component_22435';
export function Component22435({ value = 22435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22435, 'data-value': derived.doubled }, children);
}
export default Component22435;
