import React from 'react';
const LABEL_22861 = 'component_22861';
export function Component22861({ value = 22861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22861, 'data-value': derived.doubled }, children);
}
export default Component22861;
