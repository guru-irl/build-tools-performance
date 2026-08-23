import React from 'react';
const LABEL_6032 = 'component_6032';
export function Component6032({ value = 6032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6032, 'data-value': derived.doubled }, children);
}
export default Component6032;
