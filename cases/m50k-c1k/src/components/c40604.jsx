import React from 'react';
const LABEL_40604 = 'component_40604';
export function Component40604({ value = 40604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40604, 'data-value': derived.doubled }, children);
}
export default Component40604;
