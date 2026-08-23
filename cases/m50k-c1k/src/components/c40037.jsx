import React from 'react';
const LABEL_40037 = 'component_40037';
export function Component40037({ value = 40037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40037, 'data-value': derived.doubled }, children);
}
export default Component40037;
