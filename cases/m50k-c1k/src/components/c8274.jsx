import React from 'react';
const LABEL_8274 = 'component_8274';
export function Component8274({ value = 8274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8274, 'data-value': derived.doubled }, children);
}
export default Component8274;
