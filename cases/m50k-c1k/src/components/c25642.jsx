import React from 'react';
const LABEL_25642 = 'component_25642';
export function Component25642({ value = 25642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25642, 'data-value': derived.doubled }, children);
}
export default Component25642;
