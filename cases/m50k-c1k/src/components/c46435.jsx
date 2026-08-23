import React from 'react';
const LABEL_46435 = 'component_46435';
export function Component46435({ value = 46435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46435, 'data-value': derived.doubled }, children);
}
export default Component46435;
