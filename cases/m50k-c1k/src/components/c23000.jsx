import React from 'react';
const LABEL_23000 = 'component_23000';
export function Component23000({ value = 23000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23000, 'data-value': derived.doubled }, children);
}
export default Component23000;
