import React from 'react';
const LABEL_42256 = 'component_42256';
export function Component42256({ value = 42256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42256, 'data-value': derived.doubled }, children);
}
export default Component42256;
