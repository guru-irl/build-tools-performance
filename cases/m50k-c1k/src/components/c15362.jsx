import React from 'react';
const LABEL_15362 = 'component_15362';
export function Component15362({ value = 15362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15362, 'data-value': derived.doubled }, children);
}
export default Component15362;
