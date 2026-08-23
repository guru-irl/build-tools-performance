import React from 'react';
const LABEL_30776 = 'component_30776';
export function Component30776({ value = 30776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30776, 'data-value': derived.doubled }, children);
}
export default Component30776;
