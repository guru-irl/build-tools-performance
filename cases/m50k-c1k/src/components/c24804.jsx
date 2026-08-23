import React from 'react';
const LABEL_24804 = 'component_24804';
export function Component24804({ value = 24804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24804, 'data-value': derived.doubled }, children);
}
export default Component24804;
