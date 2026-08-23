import React from 'react';
const LABEL_30646 = 'component_30646';
export function Component30646({ value = 30646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30646, 'data-value': derived.doubled }, children);
}
export default Component30646;
