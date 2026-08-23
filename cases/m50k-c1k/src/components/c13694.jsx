import React from 'react';
const LABEL_13694 = 'component_13694';
export function Component13694({ value = 13694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13694, 'data-value': derived.doubled }, children);
}
export default Component13694;
