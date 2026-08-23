import React from 'react';
const LABEL_16694 = 'component_16694';
export function Component16694({ value = 16694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16694, 'data-value': derived.doubled }, children);
}
export default Component16694;
