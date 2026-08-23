import React from 'react';
const LABEL_44435 = 'component_44435';
export function Component44435({ value = 44435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44435, 'data-value': derived.doubled }, children);
}
export default Component44435;
