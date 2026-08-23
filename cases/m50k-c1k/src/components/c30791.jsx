import React from 'react';
const LABEL_30791 = 'component_30791';
export function Component30791({ value = 30791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30791, 'data-value': derived.doubled }, children);
}
export default Component30791;
