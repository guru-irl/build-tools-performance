import React from 'react';
const LABEL_21544 = 'component_21544';
export function Component21544({ value = 21544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21544, 'data-value': derived.doubled }, children);
}
export default Component21544;
