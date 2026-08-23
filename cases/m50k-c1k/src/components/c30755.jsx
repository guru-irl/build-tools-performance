import React from 'react';
const LABEL_30755 = 'component_30755';
export function Component30755({ value = 30755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30755, 'data-value': derived.doubled }, children);
}
export default Component30755;
