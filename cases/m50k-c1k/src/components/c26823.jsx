import React from 'react';
const LABEL_26823 = 'component_26823';
export function Component26823({ value = 26823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26823, 'data-value': derived.doubled }, children);
}
export default Component26823;
