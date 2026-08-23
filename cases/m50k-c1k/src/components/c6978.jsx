import React from 'react';
const LABEL_6978 = 'component_6978';
export function Component6978({ value = 6978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6978, 'data-value': derived.doubled }, children);
}
export default Component6978;
