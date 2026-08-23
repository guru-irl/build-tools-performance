import React from 'react';
const LABEL_22931 = 'component_22931';
export function Component22931({ value = 22931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22931, 'data-value': derived.doubled }, children);
}
export default Component22931;
