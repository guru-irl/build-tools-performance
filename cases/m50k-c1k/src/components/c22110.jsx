import React from 'react';
const LABEL_22110 = 'component_22110';
export function Component22110({ value = 22110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22110, 'data-value': derived.doubled }, children);
}
export default Component22110;
