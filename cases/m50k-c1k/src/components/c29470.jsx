import React from 'react';
const LABEL_29470 = 'component_29470';
export function Component29470({ value = 29470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29470, 'data-value': derived.doubled }, children);
}
export default Component29470;
