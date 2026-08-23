import React from 'react';
const LABEL_38943 = 'component_38943';
export function Component38943({ value = 38943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38943, 'data-value': derived.doubled }, children);
}
export default Component38943;
