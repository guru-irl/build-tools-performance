import React from 'react';
const LABEL_8256 = 'component_8256';
export function Component8256({ value = 8256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8256, 'data-value': derived.doubled }, children);
}
export default Component8256;
