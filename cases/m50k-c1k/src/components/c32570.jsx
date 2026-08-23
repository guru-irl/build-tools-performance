import React from 'react';
const LABEL_32570 = 'component_32570';
export function Component32570({ value = 32570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32570, 'data-value': derived.doubled }, children);
}
export default Component32570;
