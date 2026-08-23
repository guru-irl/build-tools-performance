import React from 'react';
const LABEL_253 = 'component_253';
export function Component253({ value = 253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_253, 'data-value': derived.doubled }, children);
}
export default Component253;
