import React from 'react';
const LABEL_777 = 'component_777';
export function Component777({ value = 777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_777, 'data-value': derived.doubled }, children);
}
export default Component777;
