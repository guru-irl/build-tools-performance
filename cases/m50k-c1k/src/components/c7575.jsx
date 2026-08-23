import React from 'react';
const LABEL_7575 = 'component_7575';
export function Component7575({ value = 7575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7575, 'data-value': derived.doubled }, children);
}
export default Component7575;
