import React from 'react';
const LABEL_22545 = 'component_22545';
export function Component22545({ value = 22545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22545, 'data-value': derived.doubled }, children);
}
export default Component22545;
