import React from 'react';
const LABEL_26083 = 'component_26083';
export function Component26083({ value = 26083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26083, 'data-value': derived.doubled }, children);
}
export default Component26083;
