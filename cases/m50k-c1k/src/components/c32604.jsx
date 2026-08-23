import React from 'react';
const LABEL_32604 = 'component_32604';
export function Component32604({ value = 32604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32604, 'data-value': derived.doubled }, children);
}
export default Component32604;
