import React from 'react';
const LABEL_28109 = 'component_28109';
export function Component28109({ value = 28109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28109, 'data-value': derived.doubled }, children);
}
export default Component28109;
