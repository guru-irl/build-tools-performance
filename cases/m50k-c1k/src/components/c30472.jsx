import React from 'react';
const LABEL_30472 = 'component_30472';
export function Component30472({ value = 30472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30472, 'data-value': derived.doubled }, children);
}
export default Component30472;
