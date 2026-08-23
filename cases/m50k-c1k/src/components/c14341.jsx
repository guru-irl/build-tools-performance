import React from 'react';
const LABEL_14341 = 'component_14341';
export function Component14341({ value = 14341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14341, 'data-value': derived.doubled }, children);
}
export default Component14341;
