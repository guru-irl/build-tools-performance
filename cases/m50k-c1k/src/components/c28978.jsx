import React from 'react';
const LABEL_28978 = 'component_28978';
export function Component28978({ value = 28978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28978, 'data-value': derived.doubled }, children);
}
export default Component28978;
