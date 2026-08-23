import React from 'react';
const LABEL_20329 = 'component_20329';
export function Component20329({ value = 20329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20329, 'data-value': derived.doubled }, children);
}
export default Component20329;
