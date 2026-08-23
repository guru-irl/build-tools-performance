import React from 'react';
const LABEL_39978 = 'component_39978';
export function Component39978({ value = 39978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39978, 'data-value': derived.doubled }, children);
}
export default Component39978;
