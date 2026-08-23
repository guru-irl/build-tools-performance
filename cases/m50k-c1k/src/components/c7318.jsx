import React from 'react';
const LABEL_7318 = 'component_7318';
export function Component7318({ value = 7318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7318, 'data-value': derived.doubled }, children);
}
export default Component7318;
