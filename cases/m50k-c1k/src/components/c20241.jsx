import React from 'react';
const LABEL_20241 = 'component_20241';
export function Component20241({ value = 20241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20241, 'data-value': derived.doubled }, children);
}
export default Component20241;
