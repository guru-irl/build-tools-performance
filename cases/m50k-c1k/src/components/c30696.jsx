import React from 'react';
const LABEL_30696 = 'component_30696';
export function Component30696({ value = 30696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30696, 'data-value': derived.doubled }, children);
}
export default Component30696;
