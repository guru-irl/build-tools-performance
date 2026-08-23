import React from 'react';
const LABEL_46694 = 'component_46694';
export function Component46694({ value = 46694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46694, 'data-value': derived.doubled }, children);
}
export default Component46694;
