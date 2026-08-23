import React from 'react';
const LABEL_1694 = 'component_1694';
export function Component1694({ value = 1694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1694, 'data-value': derived.doubled }, children);
}
export default Component1694;
