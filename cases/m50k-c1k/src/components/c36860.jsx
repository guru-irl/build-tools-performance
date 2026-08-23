import React from 'react';
const LABEL_36860 = 'component_36860';
export function Component36860({ value = 36860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36860, 'data-value': derived.doubled }, children);
}
export default Component36860;
