import React from 'react';
const LABEL_15290 = 'component_15290';
export function Component15290({ value = 15290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15290, 'data-value': derived.doubled }, children);
}
export default Component15290;
