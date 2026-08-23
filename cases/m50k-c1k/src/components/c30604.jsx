import React from 'react';
const LABEL_30604 = 'component_30604';
export function Component30604({ value = 30604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30604, 'data-value': derived.doubled }, children);
}
export default Component30604;
