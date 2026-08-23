import React from 'react';
const LABEL_21068 = 'component_21068';
export function Component21068({ value = 21068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21068, 'data-value': derived.doubled }, children);
}
export default Component21068;
