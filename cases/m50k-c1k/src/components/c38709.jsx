import React from 'react';
const LABEL_38709 = 'component_38709';
export function Component38709({ value = 38709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38709, 'data-value': derived.doubled }, children);
}
export default Component38709;
