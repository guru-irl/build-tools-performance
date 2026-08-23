import React from 'react';
const LABEL_30593 = 'component_30593';
export function Component30593({ value = 30593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30593, 'data-value': derived.doubled }, children);
}
export default Component30593;
