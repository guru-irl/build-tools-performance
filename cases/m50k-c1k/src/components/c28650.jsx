import React from 'react';
const LABEL_28650 = 'component_28650';
export function Component28650({ value = 28650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28650, 'data-value': derived.doubled }, children);
}
export default Component28650;
