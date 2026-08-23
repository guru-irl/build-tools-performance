import React from 'react';
const LABEL_28729 = 'component_28729';
export function Component28729({ value = 28729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28729, 'data-value': derived.doubled }, children);
}
export default Component28729;
