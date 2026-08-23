import React from 'react';
const LABEL_11600 = 'component_11600';
export function Component11600({ value = 11600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11600, 'data-value': derived.doubled }, children);
}
export default Component11600;
