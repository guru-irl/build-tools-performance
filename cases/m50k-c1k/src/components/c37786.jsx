import React from 'react';
const LABEL_37786 = 'component_37786';
export function Component37786({ value = 37786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37786, 'data-value': derived.doubled }, children);
}
export default Component37786;
