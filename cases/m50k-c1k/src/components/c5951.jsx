import React from 'react';
const LABEL_5951 = 'component_5951';
export function Component5951({ value = 5951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5951, 'data-value': derived.doubled }, children);
}
export default Component5951;
