import React from 'react';
const LABEL_16252 = 'component_16252';
export function Component16252({ value = 16252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16252, 'data-value': derived.doubled }, children);
}
export default Component16252;
