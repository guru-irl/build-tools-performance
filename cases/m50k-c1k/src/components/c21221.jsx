import React from 'react';
const LABEL_21221 = 'component_21221';
export function Component21221({ value = 21221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21221, 'data-value': derived.doubled }, children);
}
export default Component21221;
