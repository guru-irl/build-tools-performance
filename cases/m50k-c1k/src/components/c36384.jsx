import React from 'react';
const LABEL_36384 = 'component_36384';
export function Component36384({ value = 36384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36384, 'data-value': derived.doubled }, children);
}
export default Component36384;
