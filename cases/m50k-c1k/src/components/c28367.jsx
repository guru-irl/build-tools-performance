import React from 'react';
const LABEL_28367 = 'component_28367';
export function Component28367({ value = 28367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28367, 'data-value': derived.doubled }, children);
}
export default Component28367;
