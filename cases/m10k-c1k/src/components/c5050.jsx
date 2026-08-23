import React from 'react';
const LABEL_5050 = 'component_5050';
export function Component5050({ value = 5050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5050, 'data-value': derived.doubled }, children);
}
export default Component5050;
