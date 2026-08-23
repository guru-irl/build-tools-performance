import React from 'react';
const LABEL_7241 = 'component_7241';
export function Component7241({ value = 7241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7241, 'data-value': derived.doubled }, children);
}
export default Component7241;
