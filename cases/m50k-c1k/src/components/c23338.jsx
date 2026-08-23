import React from 'react';
const LABEL_23338 = 'component_23338';
export function Component23338({ value = 23338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23338, 'data-value': derived.doubled }, children);
}
export default Component23338;
