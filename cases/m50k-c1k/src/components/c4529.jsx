import React from 'react';
const LABEL_4529 = 'component_4529';
export function Component4529({ value = 4529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4529, 'data-value': derived.doubled }, children);
}
export default Component4529;
