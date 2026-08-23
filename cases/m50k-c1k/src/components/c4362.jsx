import React from 'react';
const LABEL_4362 = 'component_4362';
export function Component4362({ value = 4362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4362, 'data-value': derived.doubled }, children);
}
export default Component4362;
