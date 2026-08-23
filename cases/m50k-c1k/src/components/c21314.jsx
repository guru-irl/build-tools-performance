import React from 'react';
const LABEL_21314 = 'component_21314';
export function Component21314({ value = 21314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21314, 'data-value': derived.doubled }, children);
}
export default Component21314;
