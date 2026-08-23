import React from 'react';
const LABEL_33391 = 'component_33391';
export function Component33391({ value = 33391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33391, 'data-value': derived.doubled }, children);
}
export default Component33391;
