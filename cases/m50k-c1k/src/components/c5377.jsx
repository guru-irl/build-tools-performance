import React from 'react';
const LABEL_5377 = 'component_5377';
export function Component5377({ value = 5377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5377, 'data-value': derived.doubled }, children);
}
export default Component5377;
