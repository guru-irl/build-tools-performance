import React from 'react';
const LABEL_44237 = 'component_44237';
export function Component44237({ value = 44237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44237, 'data-value': derived.doubled }, children);
}
export default Component44237;
