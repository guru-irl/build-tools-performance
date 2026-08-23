import React from 'react';
const LABEL_11516 = 'component_11516';
export function Component11516({ value = 11516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11516, 'data-value': derived.doubled }, children);
}
export default Component11516;
