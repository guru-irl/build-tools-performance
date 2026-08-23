import React from 'react';
const LABEL_10978 = 'component_10978';
export function Component10978({ value = 10978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10978, 'data-value': derived.doubled }, children);
}
export default Component10978;
