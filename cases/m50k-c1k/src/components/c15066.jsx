import React from 'react';
const LABEL_15066 = 'component_15066';
export function Component15066({ value = 15066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15066, 'data-value': derived.doubled }, children);
}
export default Component15066;
