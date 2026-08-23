import React from 'react';
const LABEL_26548 = 'component_26548';
export function Component26548({ value = 26548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26548, 'data-value': derived.doubled }, children);
}
export default Component26548;
