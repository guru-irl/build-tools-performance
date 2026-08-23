import React from 'react';
const LABEL_33068 = 'component_33068';
export function Component33068({ value = 33068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33068, 'data-value': derived.doubled }, children);
}
export default Component33068;
