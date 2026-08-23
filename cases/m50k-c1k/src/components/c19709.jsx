import React from 'react';
const LABEL_19709 = 'component_19709';
export function Component19709({ value = 19709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19709, 'data-value': derived.doubled }, children);
}
export default Component19709;
