import React from 'react';
const LABEL_11362 = 'component_11362';
export function Component11362({ value = 11362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11362, 'data-value': derived.doubled }, children);
}
export default Component11362;
