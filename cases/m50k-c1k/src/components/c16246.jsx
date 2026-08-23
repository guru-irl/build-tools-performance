import React from 'react';
const LABEL_16246 = 'component_16246';
export function Component16246({ value = 16246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16246, 'data-value': derived.doubled }, children);
}
export default Component16246;
