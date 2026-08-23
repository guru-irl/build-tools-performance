import React from 'react';
const LABEL_40649 = 'component_40649';
export function Component40649({ value = 40649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40649, 'data-value': derived.doubled }, children);
}
export default Component40649;
