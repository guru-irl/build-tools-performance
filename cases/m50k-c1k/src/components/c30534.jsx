import React from 'react';
const LABEL_30534 = 'component_30534';
export function Component30534({ value = 30534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30534, 'data-value': derived.doubled }, children);
}
export default Component30534;
