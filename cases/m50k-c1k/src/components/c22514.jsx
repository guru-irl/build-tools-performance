import React from 'react';
const LABEL_22514 = 'component_22514';
export function Component22514({ value = 22514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22514, 'data-value': derived.doubled }, children);
}
export default Component22514;
