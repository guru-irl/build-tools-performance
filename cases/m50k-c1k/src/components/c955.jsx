import React from 'react';
const LABEL_955 = 'component_955';
export function Component955({ value = 955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_955, 'data-value': derived.doubled }, children);
}
export default Component955;
