import React from 'react';
const LABEL_45603 = 'component_45603';
export function Component45603({ value = 45603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45603, 'data-value': derived.doubled }, children);
}
export default Component45603;
