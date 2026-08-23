import React from 'react';
const LABEL_30971 = 'component_30971';
export function Component30971({ value = 30971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30971, 'data-value': derived.doubled }, children);
}
export default Component30971;
