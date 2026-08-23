import React from 'react';
const LABEL_30630 = 'component_30630';
export function Component30630({ value = 30630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30630, 'data-value': derived.doubled }, children);
}
export default Component30630;
