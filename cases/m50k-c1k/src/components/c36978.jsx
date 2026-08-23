import React from 'react';
const LABEL_36978 = 'component_36978';
export function Component36978({ value = 36978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36978, 'data-value': derived.doubled }, children);
}
export default Component36978;
