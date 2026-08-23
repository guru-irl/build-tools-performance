import React from 'react';
const LABEL_32463 = 'component_32463';
export function Component32463({ value = 32463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32463, 'data-value': derived.doubled }, children);
}
export default Component32463;
