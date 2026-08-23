import React from 'react';
const LABEL_11174 = 'component_11174';
export function Component11174({ value = 11174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11174, 'data-value': derived.doubled }, children);
}
export default Component11174;
