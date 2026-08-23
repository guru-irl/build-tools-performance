import React from 'react';
const LABEL_6676 = 'component_6676';
export function Component6676({ value = 6676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6676, 'data-value': derived.doubled }, children);
}
export default Component6676;
