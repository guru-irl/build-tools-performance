import React from 'react';
const LABEL_25941 = 'component_25941';
export function Component25941({ value = 25941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25941, 'data-value': derived.doubled }, children);
}
export default Component25941;
