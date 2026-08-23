import React from 'react';
const LABEL_44604 = 'component_44604';
export function Component44604({ value = 44604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44604, 'data-value': derived.doubled }, children);
}
export default Component44604;
