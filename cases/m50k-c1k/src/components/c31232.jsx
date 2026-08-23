import React from 'react';
const LABEL_31232 = 'component_31232';
export function Component31232({ value = 31232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31232, 'data-value': derived.doubled }, children);
}
export default Component31232;
