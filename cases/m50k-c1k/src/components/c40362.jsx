import React from 'react';
const LABEL_40362 = 'component_40362';
export function Component40362({ value = 40362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40362, 'data-value': derived.doubled }, children);
}
export default Component40362;
