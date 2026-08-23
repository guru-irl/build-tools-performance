import React from 'react';
const LABEL_11777 = 'component_11777';
export function Component11777({ value = 11777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11777, 'data-value': derived.doubled }, children);
}
export default Component11777;
