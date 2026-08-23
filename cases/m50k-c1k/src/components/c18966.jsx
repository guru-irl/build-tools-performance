import React from 'react';
const LABEL_18966 = 'component_18966';
export function Component18966({ value = 18966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18966, 'data-value': derived.doubled }, children);
}
export default Component18966;
