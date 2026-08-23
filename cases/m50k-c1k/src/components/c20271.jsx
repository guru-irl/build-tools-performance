import React from 'react';
const LABEL_20271 = 'component_20271';
export function Component20271({ value = 20271, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20271, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20271, 'data-value': derived.doubled }, children);
}
export default Component20271;
