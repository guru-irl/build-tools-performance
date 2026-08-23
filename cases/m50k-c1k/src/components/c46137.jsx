import React from 'react';
const LABEL_46137 = 'component_46137';
export function Component46137({ value = 46137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46137, 'data-value': derived.doubled }, children);
}
export default Component46137;
