import React from 'react';
const LABEL_23115 = 'component_23115';
export function Component23115({ value = 23115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23115, 'data-value': derived.doubled }, children);
}
export default Component23115;
