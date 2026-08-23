import React from 'react';
const LABEL_11778 = 'component_11778';
export function Component11778({ value = 11778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11778, 'data-value': derived.doubled }, children);
}
export default Component11778;
