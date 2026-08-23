import React from 'react';
const LABEL_46037 = 'component_46037';
export function Component46037({ value = 46037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46037, 'data-value': derived.doubled }, children);
}
export default Component46037;
