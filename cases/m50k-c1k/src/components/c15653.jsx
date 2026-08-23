import React from 'react';
const LABEL_15653 = 'component_15653';
export function Component15653({ value = 15653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15653, 'data-value': derived.doubled }, children);
}
export default Component15653;
