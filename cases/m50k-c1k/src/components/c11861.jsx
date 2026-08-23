import React from 'react';
const LABEL_11861 = 'component_11861';
export function Component11861({ value = 11861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11861, 'data-value': derived.doubled }, children);
}
export default Component11861;
