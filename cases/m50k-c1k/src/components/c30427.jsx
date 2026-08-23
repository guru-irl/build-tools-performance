import React from 'react';
const LABEL_30427 = 'component_30427';
export function Component30427({ value = 30427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30427, 'data-value': derived.doubled }, children);
}
export default Component30427;
