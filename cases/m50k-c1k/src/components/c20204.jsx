import React from 'react';
const LABEL_20204 = 'component_20204';
export function Component20204({ value = 20204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20204, 'data-value': derived.doubled }, children);
}
export default Component20204;
