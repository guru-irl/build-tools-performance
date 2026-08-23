import React from 'react';
const LABEL_22724 = 'component_22724';
export function Component22724({ value = 22724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22724, 'data-value': derived.doubled }, children);
}
export default Component22724;
