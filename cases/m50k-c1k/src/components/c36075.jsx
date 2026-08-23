import React from 'react';
const LABEL_36075 = 'component_36075';
export function Component36075({ value = 36075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36075, 'data-value': derived.doubled }, children);
}
export default Component36075;
