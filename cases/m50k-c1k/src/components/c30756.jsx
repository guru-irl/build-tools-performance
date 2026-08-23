import React from 'react';
const LABEL_30756 = 'component_30756';
export function Component30756({ value = 30756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30756, 'data-value': derived.doubled }, children);
}
export default Component30756;
