import React from 'react';
const LABEL_35243 = 'component_35243';
export function Component35243({ value = 35243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35243, 'data-value': derived.doubled }, children);
}
export default Component35243;
