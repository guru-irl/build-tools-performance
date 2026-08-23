import React from 'react';
const LABEL_33946 = 'component_33946';
export function Component33946({ value = 33946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33946, 'data-value': derived.doubled }, children);
}
export default Component33946;
