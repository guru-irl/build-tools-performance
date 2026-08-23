import React from 'react';
const LABEL_23361 = 'component_23361';
export function Component23361({ value = 23361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23361, 'data-value': derived.doubled }, children);
}
export default Component23361;
