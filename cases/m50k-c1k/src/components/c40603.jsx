import React from 'react';
const LABEL_40603 = 'component_40603';
export function Component40603({ value = 40603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40603, 'data-value': derived.doubled }, children);
}
export default Component40603;
