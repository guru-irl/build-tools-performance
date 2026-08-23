import React from 'react';
const LABEL_22964 = 'component_22964';
export function Component22964({ value = 22964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22964, 'data-value': derived.doubled }, children);
}
export default Component22964;
