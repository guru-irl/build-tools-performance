import React from 'react';
const LABEL_6604 = 'component_6604';
export function Component6604({ value = 6604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6604, 'data-value': derived.doubled }, children);
}
export default Component6604;
