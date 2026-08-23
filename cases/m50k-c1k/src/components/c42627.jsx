import React from 'react';
const LABEL_42627 = 'component_42627';
export function Component42627({ value = 42627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42627, 'data-value': derived.doubled }, children);
}
export default Component42627;
