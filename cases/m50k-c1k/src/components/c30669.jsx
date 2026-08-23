import React from 'react';
const LABEL_30669 = 'component_30669';
export function Component30669({ value = 30669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30669, 'data-value': derived.doubled }, children);
}
export default Component30669;
