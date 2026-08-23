import React from 'react';
const LABEL_6121 = 'component_6121';
export function Component6121({ value = 6121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6121, 'data-value': derived.doubled }, children);
}
export default Component6121;
