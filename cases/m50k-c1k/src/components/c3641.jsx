import React from 'react';
const LABEL_3641 = 'component_3641';
export function Component3641({ value = 3641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3641, 'data-value': derived.doubled }, children);
}
export default Component3641;
