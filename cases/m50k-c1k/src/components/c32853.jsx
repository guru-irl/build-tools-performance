import React from 'react';
const LABEL_32853 = 'component_32853';
export function Component32853({ value = 32853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32853, 'data-value': derived.doubled }, children);
}
export default Component32853;
