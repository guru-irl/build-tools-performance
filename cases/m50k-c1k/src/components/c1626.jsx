import React from 'react';
const LABEL_1626 = 'component_1626';
export function Component1626({ value = 1626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1626, 'data-value': derived.doubled }, children);
}
export default Component1626;
