import React from 'react';
const LABEL_38565 = 'component_38565';
export function Component38565({ value = 38565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38565, 'data-value': derived.doubled }, children);
}
export default Component38565;
