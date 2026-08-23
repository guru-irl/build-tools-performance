import React from 'react';
const LABEL_30998 = 'component_30998';
export function Component30998({ value = 30998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30998, 'data-value': derived.doubled }, children);
}
export default Component30998;
