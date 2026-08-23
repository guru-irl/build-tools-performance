import React from 'react';
const LABEL_30002 = 'component_30002';
export function Component30002({ value = 30002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30002, 'data-value': derived.doubled }, children);
}
export default Component30002;
