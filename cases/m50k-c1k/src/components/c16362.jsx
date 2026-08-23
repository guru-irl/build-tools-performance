import React from 'react';
const LABEL_16362 = 'component_16362';
export function Component16362({ value = 16362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16362, 'data-value': derived.doubled }, children);
}
export default Component16362;
