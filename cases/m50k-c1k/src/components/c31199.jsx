import React from 'react';
const LABEL_31199 = 'component_31199';
export function Component31199({ value = 31199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31199, 'data-value': derived.doubled }, children);
}
export default Component31199;
