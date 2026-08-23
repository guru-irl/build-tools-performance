import React from 'react';
const LABEL_32690 = 'component_32690';
export function Component32690({ value = 32690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32690, 'data-value': derived.doubled }, children);
}
export default Component32690;
