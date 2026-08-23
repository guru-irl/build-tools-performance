import React from 'react';
const LABEL_40102 = 'component_40102';
export function Component40102({ value = 40102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40102, 'data-value': derived.doubled }, children);
}
export default Component40102;
