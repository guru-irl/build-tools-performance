import React from 'react';
const LABEL_30189 = 'component_30189';
export function Component30189({ value = 30189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30189, 'data-value': derived.doubled }, children);
}
export default Component30189;
