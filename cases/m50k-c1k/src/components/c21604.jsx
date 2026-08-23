import React from 'react';
const LABEL_21604 = 'component_21604';
export function Component21604({ value = 21604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21604, 'data-value': derived.doubled }, children);
}
export default Component21604;
