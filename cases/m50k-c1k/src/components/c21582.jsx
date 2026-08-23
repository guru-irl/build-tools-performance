import React from 'react';
const LABEL_21582 = 'component_21582';
export function Component21582({ value = 21582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21582, 'data-value': derived.doubled }, children);
}
export default Component21582;
