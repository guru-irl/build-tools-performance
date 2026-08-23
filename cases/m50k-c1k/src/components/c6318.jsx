import React from 'react';
const LABEL_6318 = 'component_6318';
export function Component6318({ value = 6318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6318, 'data-value': derived.doubled }, children);
}
export default Component6318;
