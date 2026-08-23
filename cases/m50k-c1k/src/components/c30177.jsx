import React from 'react';
const LABEL_30177 = 'component_30177';
export function Component30177({ value = 30177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30177, 'data-value': derived.doubled }, children);
}
export default Component30177;
