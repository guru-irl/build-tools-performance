import React from 'react';
const LABEL_6834 = 'component_6834';
export function Component6834({ value = 6834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6834, 'data-value': derived.doubled }, children);
}
export default Component6834;
