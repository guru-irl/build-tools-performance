import React from 'react';
const LABEL_15818 = 'component_15818';
export function Component15818({ value = 15818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15818, 'data-value': derived.doubled }, children);
}
export default Component15818;
