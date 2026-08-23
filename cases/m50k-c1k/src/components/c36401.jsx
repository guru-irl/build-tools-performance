import React from 'react';
const LABEL_36401 = 'component_36401';
export function Component36401({ value = 36401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36401, 'data-value': derived.doubled }, children);
}
export default Component36401;
