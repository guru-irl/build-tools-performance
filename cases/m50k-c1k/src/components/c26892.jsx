import React from 'react';
const LABEL_26892 = 'component_26892';
export function Component26892({ value = 26892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26892, 'data-value': derived.doubled }, children);
}
export default Component26892;
