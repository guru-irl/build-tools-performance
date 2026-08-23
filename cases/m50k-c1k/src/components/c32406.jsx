import React from 'react';
const LABEL_32406 = 'component_32406';
export function Component32406({ value = 32406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32406, 'data-value': derived.doubled }, children);
}
export default Component32406;
