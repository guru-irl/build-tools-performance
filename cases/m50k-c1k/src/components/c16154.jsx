import React from 'react';
const LABEL_16154 = 'component_16154';
export function Component16154({ value = 16154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16154, 'data-value': derived.doubled }, children);
}
export default Component16154;
