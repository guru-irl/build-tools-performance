import React from 'react';
const LABEL_30151 = 'component_30151';
export function Component30151({ value = 30151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30151, 'data-value': derived.doubled }, children);
}
export default Component30151;
