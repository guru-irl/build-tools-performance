import React from 'react';
const LABEL_37729 = 'component_37729';
export function Component37729({ value = 37729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37729, 'data-value': derived.doubled }, children);
}
export default Component37729;
