import React from 'react';
const LABEL_5172 = 'component_5172';
export function Component5172({ value = 5172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5172, 'data-value': derived.doubled }, children);
}
export default Component5172;
