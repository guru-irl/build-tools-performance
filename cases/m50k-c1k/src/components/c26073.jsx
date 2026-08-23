import React from 'react';
const LABEL_26073 = 'component_26073';
export function Component26073({ value = 26073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26073, 'data-value': derived.doubled }, children);
}
export default Component26073;
