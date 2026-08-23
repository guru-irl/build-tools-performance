import React from 'react';
const LABEL_42667 = 'component_42667';
export function Component42667({ value = 42667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42667, 'data-value': derived.doubled }, children);
}
export default Component42667;
