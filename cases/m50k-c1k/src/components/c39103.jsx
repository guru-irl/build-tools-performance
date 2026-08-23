import React from 'react';
const LABEL_39103 = 'component_39103';
export function Component39103({ value = 39103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39103, 'data-value': derived.doubled }, children);
}
export default Component39103;
