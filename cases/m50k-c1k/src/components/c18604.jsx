import React from 'react';
const LABEL_18604 = 'component_18604';
export function Component18604({ value = 18604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18604, 'data-value': derived.doubled }, children);
}
export default Component18604;
