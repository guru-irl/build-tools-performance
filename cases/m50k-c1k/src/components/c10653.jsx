import React from 'react';
const LABEL_10653 = 'component_10653';
export function Component10653({ value = 10653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10653, 'data-value': derived.doubled }, children);
}
export default Component10653;
