import React from 'react';
const LABEL_14314 = 'component_14314';
export function Component14314({ value = 14314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14314, 'data-value': derived.doubled }, children);
}
export default Component14314;
