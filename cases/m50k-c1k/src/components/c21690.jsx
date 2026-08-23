import React from 'react';
const LABEL_21690 = 'component_21690';
export function Component21690({ value = 21690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21690, 'data-value': derived.doubled }, children);
}
export default Component21690;
