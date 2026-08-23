import React from 'react';
const LABEL_20919 = 'component_20919';
export function Component20919({ value = 20919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20919, 'data-value': derived.doubled }, children);
}
export default Component20919;
