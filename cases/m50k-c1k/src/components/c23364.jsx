import React from 'react';
const LABEL_23364 = 'component_23364';
export function Component23364({ value = 23364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23364, 'data-value': derived.doubled }, children);
}
export default Component23364;
