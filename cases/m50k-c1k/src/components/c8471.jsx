import React from 'react';
const LABEL_8471 = 'component_8471';
export function Component8471({ value = 8471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8471, 'data-value': derived.doubled }, children);
}
export default Component8471;
