import React from 'react';
const LABEL_28212 = 'component_28212';
export function Component28212({ value = 28212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28212, 'data-value': derived.doubled }, children);
}
export default Component28212;
