import React from 'react';
const LABEL_36484 = 'component_36484';
export function Component36484({ value = 36484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36484, 'data-value': derived.doubled }, children);
}
export default Component36484;
