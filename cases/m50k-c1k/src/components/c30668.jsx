import React from 'react';
const LABEL_30668 = 'component_30668';
export function Component30668({ value = 30668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30668, 'data-value': derived.doubled }, children);
}
export default Component30668;
