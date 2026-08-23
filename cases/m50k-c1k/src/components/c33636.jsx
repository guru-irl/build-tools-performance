import React from 'react';
const LABEL_33636 = 'component_33636';
export function Component33636({ value = 33636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33636, 'data-value': derived.doubled }, children);
}
export default Component33636;
