import React from 'react';
const LABEL_30171 = 'component_30171';
export function Component30171({ value = 30171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30171, 'data-value': derived.doubled }, children);
}
export default Component30171;
