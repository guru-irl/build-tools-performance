import React from 'react';
const LABEL_35314 = 'component_35314';
export function Component35314({ value = 35314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35314, 'data-value': derived.doubled }, children);
}
export default Component35314;
