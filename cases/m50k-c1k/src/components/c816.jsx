import React from 'react';
const LABEL_816 = 'component_816';
export function Component816({ value = 816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_816, 'data-value': derived.doubled }, children);
}
export default Component816;
