import React from 'react';
const LABEL_30017 = 'component_30017';
export function Component30017({ value = 30017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30017, 'data-value': derived.doubled }, children);
}
export default Component30017;
