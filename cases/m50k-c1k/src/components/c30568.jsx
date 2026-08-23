import React from 'react';
const LABEL_30568 = 'component_30568';
export function Component30568({ value = 30568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30568, 'data-value': derived.doubled }, children);
}
export default Component30568;
