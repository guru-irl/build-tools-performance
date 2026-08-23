import React from 'react';
const LABEL_30442 = 'component_30442';
export function Component30442({ value = 30442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30442, 'data-value': derived.doubled }, children);
}
export default Component30442;
