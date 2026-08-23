import React from 'react';
const LABEL_10604 = 'component_10604';
export function Component10604({ value = 10604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10604, 'data-value': derived.doubled }, children);
}
export default Component10604;
