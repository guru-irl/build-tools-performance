import React from 'react';
const LABEL_26918 = 'component_26918';
export function Component26918({ value = 26918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26918, 'data-value': derived.doubled }, children);
}
export default Component26918;
