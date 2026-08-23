import React from 'react';
const LABEL_11046 = 'component_11046';
export function Component11046({ value = 11046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11046, 'data-value': derived.doubled }, children);
}
export default Component11046;
