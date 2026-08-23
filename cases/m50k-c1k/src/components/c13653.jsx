import React from 'react';
const LABEL_13653 = 'component_13653';
export function Component13653({ value = 13653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13653, 'data-value': derived.doubled }, children);
}
export default Component13653;
