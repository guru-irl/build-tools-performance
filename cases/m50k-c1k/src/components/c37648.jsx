import React from 'react';
const LABEL_37648 = 'component_37648';
export function Component37648({ value = 37648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37648, 'data-value': derived.doubled }, children);
}
export default Component37648;
