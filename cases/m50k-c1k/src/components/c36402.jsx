import React from 'react';
const LABEL_36402 = 'component_36402';
export function Component36402({ value = 36402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36402, 'data-value': derived.doubled }, children);
}
export default Component36402;
