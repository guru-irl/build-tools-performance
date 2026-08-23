import React from 'react';
const LABEL_30653 = 'component_30653';
export function Component30653({ value = 30653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30653, 'data-value': derived.doubled }, children);
}
export default Component30653;
