import React from 'react';
const LABEL_44493 = 'component_44493';
export function Component44493({ value = 44493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44493, 'data-value': derived.doubled }, children);
}
export default Component44493;
