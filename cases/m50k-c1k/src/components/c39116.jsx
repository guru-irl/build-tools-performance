import React from 'react';
const LABEL_39116 = 'component_39116';
export function Component39116({ value = 39116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39116, 'data-value': derived.doubled }, children);
}
export default Component39116;
