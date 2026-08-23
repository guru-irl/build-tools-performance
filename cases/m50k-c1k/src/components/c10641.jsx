import React from 'react';
const LABEL_10641 = 'component_10641';
export function Component10641({ value = 10641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10641, 'data-value': derived.doubled }, children);
}
export default Component10641;
