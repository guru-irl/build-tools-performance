import React from 'react';
const LABEL_4516 = 'component_4516';
export function Component4516({ value = 4516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4516, 'data-value': derived.doubled }, children);
}
export default Component4516;
