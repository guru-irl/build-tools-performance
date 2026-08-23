import React from 'react';
const LABEL_30827 = 'component_30827';
export function Component30827({ value = 30827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30827, 'data-value': derived.doubled }, children);
}
export default Component30827;
