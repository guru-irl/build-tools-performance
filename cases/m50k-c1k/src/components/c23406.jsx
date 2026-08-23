import React from 'react';
const LABEL_23406 = 'component_23406';
export function Component23406({ value = 23406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23406, 'data-value': derived.doubled }, children);
}
export default Component23406;
