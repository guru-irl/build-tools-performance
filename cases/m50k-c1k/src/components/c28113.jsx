import React from 'react';
const LABEL_28113 = 'component_28113';
export function Component28113({ value = 28113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28113, 'data-value': derived.doubled }, children);
}
export default Component28113;
