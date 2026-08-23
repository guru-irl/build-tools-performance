import React from 'react';
const LABEL_24363 = 'component_24363';
export function Component24363({ value = 24363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24363, 'data-value': derived.doubled }, children);
}
export default Component24363;
