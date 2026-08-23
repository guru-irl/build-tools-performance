import React from 'react';
const LABEL_7845 = 'component_7845';
export function Component7845({ value = 7845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7845, 'data-value': derived.doubled }, children);
}
export default Component7845;
