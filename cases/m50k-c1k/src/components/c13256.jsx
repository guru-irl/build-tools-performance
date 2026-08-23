import React from 'react';
const LABEL_13256 = 'component_13256';
export function Component13256({ value = 13256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13256, 'data-value': derived.doubled }, children);
}
export default Component13256;
