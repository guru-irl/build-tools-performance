import React from 'react';
const LABEL_30340 = 'component_30340';
export function Component30340({ value = 30340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30340, 'data-value': derived.doubled }, children);
}
export default Component30340;
