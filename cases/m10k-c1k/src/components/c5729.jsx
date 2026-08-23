import React from 'react';
const LABEL_5729 = 'component_5729';
export function Component5729({ value = 5729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5729, 'data-value': derived.doubled }, children);
}
export default Component5729;
