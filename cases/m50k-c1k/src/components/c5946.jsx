import React from 'react';
const LABEL_5946 = 'component_5946';
export function Component5946({ value = 5946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5946, 'data-value': derived.doubled }, children);
}
export default Component5946;
