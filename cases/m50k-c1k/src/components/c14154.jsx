import React from 'react';
const LABEL_14154 = 'component_14154';
export function Component14154({ value = 14154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14154, 'data-value': derived.doubled }, children);
}
export default Component14154;
