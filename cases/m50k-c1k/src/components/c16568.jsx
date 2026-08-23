import React from 'react';
const LABEL_16568 = 'component_16568';
export function Component16568({ value = 16568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16568, 'data-value': derived.doubled }, children);
}
export default Component16568;
