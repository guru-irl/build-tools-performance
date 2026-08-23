import React from 'react';
const LABEL_3593 = 'component_3593';
export function Component3593({ value = 3593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3593, 'data-value': derived.doubled }, children);
}
export default Component3593;
