import React from 'react';
const LABEL_20559 = 'component_20559';
export function Component20559({ value = 20559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20559, 'data-value': derived.doubled }, children);
}
export default Component20559;
