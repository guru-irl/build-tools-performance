import React from 'react';
const LABEL_14601 = 'component_14601';
export function Component14601({ value = 14601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14601, 'data-value': derived.doubled }, children);
}
export default Component14601;
