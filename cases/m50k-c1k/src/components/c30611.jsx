import React from 'react';
const LABEL_30611 = 'component_30611';
export function Component30611({ value = 30611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30611, 'data-value': derived.doubled }, children);
}
export default Component30611;
