import React from 'react';
const LABEL_35435 = 'component_35435';
export function Component35435({ value = 35435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35435, 'data-value': derived.doubled }, children);
}
export default Component35435;
