import React from 'react';
const LABEL_28709 = 'component_28709';
export function Component28709({ value = 28709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28709, 'data-value': derived.doubled }, children);
}
export default Component28709;
