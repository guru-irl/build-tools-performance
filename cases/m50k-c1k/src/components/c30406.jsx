import React from 'react';
const LABEL_30406 = 'component_30406';
export function Component30406({ value = 30406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30406, 'data-value': derived.doubled }, children);
}
export default Component30406;
