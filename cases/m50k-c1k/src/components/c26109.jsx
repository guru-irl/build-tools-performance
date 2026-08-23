import React from 'react';
const LABEL_26109 = 'component_26109';
export function Component26109({ value = 26109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26109, 'data-value': derived.doubled }, children);
}
export default Component26109;
