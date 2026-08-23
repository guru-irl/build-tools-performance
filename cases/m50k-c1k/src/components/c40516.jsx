import React from 'react';
const LABEL_40516 = 'component_40516';
export function Component40516({ value = 40516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40516, 'data-value': derived.doubled }, children);
}
export default Component40516;
