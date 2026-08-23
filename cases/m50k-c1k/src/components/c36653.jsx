import React from 'react';
const LABEL_36653 = 'component_36653';
export function Component36653({ value = 36653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36653, 'data-value': derived.doubled }, children);
}
export default Component36653;
