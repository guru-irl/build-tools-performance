import React from 'react';
const LABEL_17363 = 'component_17363';
export function Component17363({ value = 17363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17363, 'data-value': derived.doubled }, children);
}
export default Component17363;
