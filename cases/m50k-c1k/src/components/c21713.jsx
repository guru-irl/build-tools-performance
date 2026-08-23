import React from 'react';
const LABEL_21713 = 'component_21713';
export function Component21713({ value = 21713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21713, 'data-value': derived.doubled }, children);
}
export default Component21713;
