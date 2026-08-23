import React from 'react';
const LABEL_14784 = 'component_14784';
export function Component14784({ value = 14784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14784, 'data-value': derived.doubled }, children);
}
export default Component14784;
