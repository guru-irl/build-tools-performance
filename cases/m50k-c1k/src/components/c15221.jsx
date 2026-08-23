import React from 'react';
const LABEL_15221 = 'component_15221';
export function Component15221({ value = 15221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15221, 'data-value': derived.doubled }, children);
}
export default Component15221;
