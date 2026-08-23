import React from 'react';
const LABEL_23703 = 'component_23703';
export function Component23703({ value = 23703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23703, 'data-value': derived.doubled }, children);
}
export default Component23703;
