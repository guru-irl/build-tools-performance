import React from 'react';
const LABEL_6582 = 'component_6582';
export function Component6582({ value = 6582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6582, 'data-value': derived.doubled }, children);
}
export default Component6582;
