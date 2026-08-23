import React from 'react';
const LABEL_35559 = 'component_35559';
export function Component35559({ value = 35559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35559, 'data-value': derived.doubled }, children);
}
export default Component35559;
