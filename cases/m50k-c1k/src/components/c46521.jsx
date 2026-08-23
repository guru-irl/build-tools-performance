import React from 'react';
const LABEL_46521 = 'component_46521';
export function Component46521({ value = 46521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46521, 'data-value': derived.doubled }, children);
}
export default Component46521;
