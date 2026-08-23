import React from 'react';
const LABEL_16384 = 'component_16384';
export function Component16384({ value = 16384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16384, 'data-value': derived.doubled }, children);
}
export default Component16384;
