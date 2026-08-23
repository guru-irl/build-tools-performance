import React from 'react';
const LABEL_40978 = 'component_40978';
export function Component40978({ value = 40978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40978, 'data-value': derived.doubled }, children);
}
export default Component40978;
