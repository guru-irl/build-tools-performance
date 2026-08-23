import React from 'react';
const LABEL_35113 = 'component_35113';
export function Component35113({ value = 35113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35113, 'data-value': derived.doubled }, children);
}
export default Component35113;
