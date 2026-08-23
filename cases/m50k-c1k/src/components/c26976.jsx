import React from 'react';
const LABEL_26976 = 'component_26976';
export function Component26976({ value = 26976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26976, 'data-value': derived.doubled }, children);
}
export default Component26976;
