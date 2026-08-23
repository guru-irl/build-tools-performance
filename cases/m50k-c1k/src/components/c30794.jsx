import React from 'react';
const LABEL_30794 = 'component_30794';
export function Component30794({ value = 30794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30794, 'data-value': derived.doubled }, children);
}
export default Component30794;
