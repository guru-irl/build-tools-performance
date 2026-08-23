import React from 'react';
const LABEL_31491 = 'component_31491';
export function Component31491({ value = 31491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31491, 'data-value': derived.doubled }, children);
}
export default Component31491;
