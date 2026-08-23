import React from 'react';
const LABEL_26110 = 'component_26110';
export function Component26110({ value = 26110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26110, 'data-value': derived.doubled }, children);
}
export default Component26110;
