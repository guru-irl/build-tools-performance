import React from 'react';
const LABEL_10584 = 'component_10584';
export function Component10584({ value = 10584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10584, 'data-value': derived.doubled }, children);
}
export default Component10584;
