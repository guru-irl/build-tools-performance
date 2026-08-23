import React from 'react';
const LABEL_10860 = 'component_10860';
export function Component10860({ value = 10860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10860, 'data-value': derived.doubled }, children);
}
export default Component10860;
