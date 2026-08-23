import React from 'react';
const LABEL_6999 = 'component_6999';
export function Component6999({ value = 6999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6999, 'data-value': derived.doubled }, children);
}
export default Component6999;
