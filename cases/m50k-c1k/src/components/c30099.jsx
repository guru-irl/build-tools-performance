import React from 'react';
const LABEL_30099 = 'component_30099';
export function Component30099({ value = 30099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30099, 'data-value': derived.doubled }, children);
}
export default Component30099;
