import React from 'react';
const LABEL_33633 = 'component_33633';
export function Component33633({ value = 33633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33633, 'data-value': derived.doubled }, children);
}
export default Component33633;
