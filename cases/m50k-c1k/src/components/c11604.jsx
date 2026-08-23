import React from 'react';
const LABEL_11604 = 'component_11604';
export function Component11604({ value = 11604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11604, 'data-value': derived.doubled }, children);
}
export default Component11604;
