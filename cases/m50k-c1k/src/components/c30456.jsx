import React from 'react';
const LABEL_30456 = 'component_30456';
export function Component30456({ value = 30456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30456, 'data-value': derived.doubled }, children);
}
export default Component30456;
