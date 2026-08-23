import React from 'react';
const LABEL_10955 = 'component_10955';
export function Component10955({ value = 10955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10955, 'data-value': derived.doubled }, children);
}
export default Component10955;
