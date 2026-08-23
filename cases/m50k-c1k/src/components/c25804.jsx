import React from 'react';
const LABEL_25804 = 'component_25804';
export function Component25804({ value = 25804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25804, 'data-value': derived.doubled }, children);
}
export default Component25804;
