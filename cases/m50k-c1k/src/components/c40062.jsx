import React from 'react';
const LABEL_40062 = 'component_40062';
export function Component40062({ value = 40062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40062, 'data-value': derived.doubled }, children);
}
export default Component40062;
