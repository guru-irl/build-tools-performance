import React from 'react';
const LABEL_40249 = 'component_40249';
export function Component40249({ value = 40249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40249, 'data-value': derived.doubled }, children);
}
export default Component40249;
