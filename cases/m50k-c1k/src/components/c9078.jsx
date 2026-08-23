import React from 'react';
const LABEL_9078 = 'component_9078';
export function Component9078({ value = 9078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9078, 'data-value': derived.doubled }, children);
}
export default Component9078;
