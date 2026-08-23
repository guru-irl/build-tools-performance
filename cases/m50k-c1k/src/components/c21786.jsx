import React from 'react';
const LABEL_21786 = 'component_21786';
export function Component21786({ value = 21786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21786, 'data-value': derived.doubled }, children);
}
export default Component21786;
