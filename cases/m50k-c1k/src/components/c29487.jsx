import React from 'react';
const LABEL_29487 = 'component_29487';
export function Component29487({ value = 29487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29487, 'data-value': derived.doubled }, children);
}
export default Component29487;
