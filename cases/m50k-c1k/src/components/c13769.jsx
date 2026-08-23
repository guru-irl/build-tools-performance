import React from 'react';
const LABEL_13769 = 'component_13769';
export function Component13769({ value = 13769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13769, 'data-value': derived.doubled }, children);
}
export default Component13769;
