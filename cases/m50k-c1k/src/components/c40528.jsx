import React from 'react';
const LABEL_40528 = 'component_40528';
export function Component40528({ value = 40528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40528, 'data-value': derived.doubled }, children);
}
export default Component40528;
