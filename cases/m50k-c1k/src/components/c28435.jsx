import React from 'react';
const LABEL_28435 = 'component_28435';
export function Component28435({ value = 28435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28435, 'data-value': derived.doubled }, children);
}
export default Component28435;
