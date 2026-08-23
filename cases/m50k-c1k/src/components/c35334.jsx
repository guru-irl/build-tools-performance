import React from 'react';
const LABEL_35334 = 'component_35334';
export function Component35334({ value = 35334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35334, 'data-value': derived.doubled }, children);
}
export default Component35334;
