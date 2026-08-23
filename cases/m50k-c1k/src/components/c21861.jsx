import React from 'react';
const LABEL_21861 = 'component_21861';
export function Component21861({ value = 21861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21861, 'data-value': derived.doubled }, children);
}
export default Component21861;
