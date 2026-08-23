import React from 'react';
const LABEL_30772 = 'component_30772';
export function Component30772({ value = 30772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30772, 'data-value': derived.doubled }, children);
}
export default Component30772;
