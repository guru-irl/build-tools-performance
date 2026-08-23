import React from 'react';
const LABEL_7441 = 'component_7441';
export function Component7441({ value = 7441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7441, 'data-value': derived.doubled }, children);
}
export default Component7441;
