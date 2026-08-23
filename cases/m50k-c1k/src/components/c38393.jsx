import React from 'react';
const LABEL_38393 = 'component_38393';
export function Component38393({ value = 38393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38393, 'data-value': derived.doubled }, children);
}
export default Component38393;
