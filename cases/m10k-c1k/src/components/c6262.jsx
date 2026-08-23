import React from 'react';
const LABEL_6262 = 'component_6262';
export function Component6262({ value = 6262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6262, 'data-value': derived.doubled }, children);
}
export default Component6262;
