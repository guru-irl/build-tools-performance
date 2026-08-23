import React from 'react';
const LABEL_23694 = 'component_23694';
export function Component23694({ value = 23694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23694, 'data-value': derived.doubled }, children);
}
export default Component23694;
