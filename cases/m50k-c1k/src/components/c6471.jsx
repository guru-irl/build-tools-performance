import React from 'react';
const LABEL_6471 = 'component_6471';
export function Component6471({ value = 6471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6471, 'data-value': derived.doubled }, children);
}
export default Component6471;
