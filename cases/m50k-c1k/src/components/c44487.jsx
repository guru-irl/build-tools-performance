import React from 'react';
const LABEL_44487 = 'component_44487';
export function Component44487({ value = 44487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44487, 'data-value': derived.doubled }, children);
}
export default Component44487;
