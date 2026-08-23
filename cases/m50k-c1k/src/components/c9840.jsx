import React from 'react';
const LABEL_9840 = 'component_9840';
export function Component9840({ value = 9840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9840, 'data-value': derived.doubled }, children);
}
export default Component9840;
