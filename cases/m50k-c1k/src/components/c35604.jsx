import React from 'react';
const LABEL_35604 = 'component_35604';
export function Component35604({ value = 35604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35604, 'data-value': derived.doubled }, children);
}
export default Component35604;
