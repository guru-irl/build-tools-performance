import React from 'react';
const LABEL_30468 = 'component_30468';
export function Component30468({ value = 30468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30468, 'data-value': derived.doubled }, children);
}
export default Component30468;
