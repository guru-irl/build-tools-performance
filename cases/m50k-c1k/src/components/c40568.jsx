import React from 'react';
const LABEL_40568 = 'component_40568';
export function Component40568({ value = 40568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40568, 'data-value': derived.doubled }, children);
}
export default Component40568;
