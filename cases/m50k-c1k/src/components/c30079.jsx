import React from 'react';
const LABEL_30079 = 'component_30079';
export function Component30079({ value = 30079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30079, 'data-value': derived.doubled }, children);
}
export default Component30079;
