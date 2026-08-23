import React from 'react';
const LABEL_26657 = 'component_26657';
export function Component26657({ value = 26657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26657, 'data-value': derived.doubled }, children);
}
export default Component26657;
