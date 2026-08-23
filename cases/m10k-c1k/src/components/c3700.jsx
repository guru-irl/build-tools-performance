import React from 'react';
const LABEL_3700 = 'component_3700';
export function Component3700({ value = 3700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3700, 'data-value': derived.doubled }, children);
}
export default Component3700;
