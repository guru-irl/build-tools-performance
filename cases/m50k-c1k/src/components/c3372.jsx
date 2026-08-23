import React from 'react';
const LABEL_3372 = 'component_3372';
export function Component3372({ value = 3372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3372, 'data-value': derived.doubled }, children);
}
export default Component3372;
