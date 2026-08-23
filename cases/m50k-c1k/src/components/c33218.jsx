import React from 'react';
const LABEL_33218 = 'component_33218';
export function Component33218({ value = 33218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33218, 'data-value': derived.doubled }, children);
}
export default Component33218;
