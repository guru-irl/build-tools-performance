import React from 'react';
const LABEL_44644 = 'component_44644';
export function Component44644({ value = 44644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44644, 'data-value': derived.doubled }, children);
}
export default Component44644;
