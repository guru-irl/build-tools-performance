import React from 'react';
const LABEL_26484 = 'component_26484';
export function Component26484({ value = 26484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26484, 'data-value': derived.doubled }, children);
}
export default Component26484;
