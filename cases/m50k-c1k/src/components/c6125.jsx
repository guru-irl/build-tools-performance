import React from 'react';
const LABEL_6125 = 'component_6125';
export function Component6125({ value = 6125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6125, 'data-value': derived.doubled }, children);
}
export default Component6125;
