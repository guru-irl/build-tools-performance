import React from 'react';
const LABEL_26694 = 'component_26694';
export function Component26694({ value = 26694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26694, 'data-value': derived.doubled }, children);
}
export default Component26694;
