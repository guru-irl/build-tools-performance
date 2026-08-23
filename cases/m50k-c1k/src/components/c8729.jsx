import React from 'react';
const LABEL_8729 = 'component_8729';
export function Component8729({ value = 8729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8729, 'data-value': derived.doubled }, children);
}
export default Component8729;
