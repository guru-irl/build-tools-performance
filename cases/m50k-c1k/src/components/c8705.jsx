import React from 'react';
const LABEL_8705 = 'component_8705';
export function Component8705({ value = 8705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8705, 'data-value': derived.doubled }, children);
}
export default Component8705;
