import React from 'react';
const LABEL_42606 = 'component_42606';
export function Component42606({ value = 42606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42606, 'data-value': derived.doubled }, children);
}
export default Component42606;
