import React from 'react';
const LABEL_7562 = 'component_7562';
export function Component7562({ value = 7562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7562, 'data-value': derived.doubled }, children);
}
export default Component7562;
