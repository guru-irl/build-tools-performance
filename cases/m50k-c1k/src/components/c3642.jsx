import React from 'react';
const LABEL_3642 = 'component_3642';
export function Component3642({ value = 3642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3642, 'data-value': derived.doubled }, children);
}
export default Component3642;
