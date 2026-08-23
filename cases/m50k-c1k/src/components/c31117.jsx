import React from 'react';
const LABEL_31117 = 'component_31117';
export function Component31117({ value = 31117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31117, 'data-value': derived.doubled }, children);
}
export default Component31117;
