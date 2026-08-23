import React from 'react';
const LABEL_23978 = 'component_23978';
export function Component23978({ value = 23978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23978, 'data-value': derived.doubled }, children);
}
export default Component23978;
