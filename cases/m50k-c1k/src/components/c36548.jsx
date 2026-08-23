import React from 'react';
const LABEL_36548 = 'component_36548';
export function Component36548({ value = 36548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36548, 'data-value': derived.doubled }, children);
}
export default Component36548;
