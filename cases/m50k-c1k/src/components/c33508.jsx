import React from 'react';
const LABEL_33508 = 'component_33508';
export function Component33508({ value = 33508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33508, 'data-value': derived.doubled }, children);
}
export default Component33508;
