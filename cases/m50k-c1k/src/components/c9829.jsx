import React from 'react';
const LABEL_9829 = 'component_9829';
export function Component9829({ value = 9829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9829, 'data-value': derived.doubled }, children);
}
export default Component9829;
