import React from 'react';
const LABEL_32660 = 'component_32660';
export function Component32660({ value = 32660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32660, 'data-value': derived.doubled }, children);
}
export default Component32660;
