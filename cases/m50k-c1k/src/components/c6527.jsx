import React from 'react';
const LABEL_6527 = 'component_6527';
export function Component6527({ value = 6527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6527, 'data-value': derived.doubled }, children);
}
export default Component6527;
