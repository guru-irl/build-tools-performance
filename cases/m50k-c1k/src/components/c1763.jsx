import React from 'react';
const LABEL_1763 = 'component_1763';
export function Component1763({ value = 1763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1763, 'data-value': derived.doubled }, children);
}
export default Component1763;
