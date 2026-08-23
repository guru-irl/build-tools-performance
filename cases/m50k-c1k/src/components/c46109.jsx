import React from 'react';
const LABEL_46109 = 'component_46109';
export function Component46109({ value = 46109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46109, 'data-value': derived.doubled }, children);
}
export default Component46109;
