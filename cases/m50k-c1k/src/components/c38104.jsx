import React from 'react';
const LABEL_38104 = 'component_38104';
export function Component38104({ value = 38104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38104, 'data-value': derived.doubled }, children);
}
export default Component38104;
