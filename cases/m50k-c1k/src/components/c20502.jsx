import React from 'react';
const LABEL_20502 = 'component_20502';
export function Component20502({ value = 20502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20502, 'data-value': derived.doubled }, children);
}
export default Component20502;
