import React from 'react';
const LABEL_32943 = 'component_32943';
export function Component32943({ value = 32943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32943, 'data-value': derived.doubled }, children);
}
export default Component32943;
