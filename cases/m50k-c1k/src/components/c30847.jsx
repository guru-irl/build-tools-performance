import React from 'react';
const LABEL_30847 = 'component_30847';
export function Component30847({ value = 30847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30847, 'data-value': derived.doubled }, children);
}
export default Component30847;
