import React from 'react';
const LABEL_28694 = 'component_28694';
export function Component28694({ value = 28694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28694, 'data-value': derived.doubled }, children);
}
export default Component28694;
