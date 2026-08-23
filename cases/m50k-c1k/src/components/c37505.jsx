import React from 'react';
const LABEL_37505 = 'component_37505';
export function Component37505({ value = 37505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37505, 'data-value': derived.doubled }, children);
}
export default Component37505;
