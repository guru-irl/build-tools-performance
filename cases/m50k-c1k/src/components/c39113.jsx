import React from 'react';
const LABEL_39113 = 'component_39113';
export function Component39113({ value = 39113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39113, 'data-value': derived.doubled }, children);
}
export default Component39113;
