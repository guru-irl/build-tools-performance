import React from 'react';
const LABEL_44127 = 'component_44127';
export function Component44127({ value = 44127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44127, 'data-value': derived.doubled }, children);
}
export default Component44127;
