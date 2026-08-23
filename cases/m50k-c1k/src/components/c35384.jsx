import React from 'react';
const LABEL_35384 = 'component_35384';
export function Component35384({ value = 35384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35384, 'data-value': derived.doubled }, children);
}
export default Component35384;
