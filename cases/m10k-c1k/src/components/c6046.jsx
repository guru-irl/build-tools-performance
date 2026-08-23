import React from 'react';
const LABEL_6046 = 'component_6046';
export function Component6046({ value = 6046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6046, 'data-value': derived.doubled }, children);
}
export default Component6046;
