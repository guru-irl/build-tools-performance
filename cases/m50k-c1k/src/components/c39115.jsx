import React from 'react';
const LABEL_39115 = 'component_39115';
export function Component39115({ value = 39115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39115, 'data-value': derived.doubled }, children);
}
export default Component39115;
