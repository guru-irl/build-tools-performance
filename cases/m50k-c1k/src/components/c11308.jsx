import React from 'react';
const LABEL_11308 = 'component_11308';
export function Component11308({ value = 11308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11308, 'data-value': derived.doubled }, children);
}
export default Component11308;
