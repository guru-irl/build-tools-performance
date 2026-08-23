import React from 'react';
const LABEL_15562 = 'component_15562';
export function Component15562({ value = 15562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15562, 'data-value': derived.doubled }, children);
}
export default Component15562;
