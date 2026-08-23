import React from 'react';
const LABEL_11427 = 'component_11427';
export function Component11427({ value = 11427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11427, 'data-value': derived.doubled }, children);
}
export default Component11427;
