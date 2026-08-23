import React from 'react';
const LABEL_3212 = 'component_3212';
export function Component3212({ value = 3212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3212, 'data-value': derived.doubled }, children);
}
export default Component3212;
