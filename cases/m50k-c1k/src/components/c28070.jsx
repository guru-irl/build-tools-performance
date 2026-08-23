import React from 'react';
const LABEL_28070 = 'component_28070';
export function Component28070({ value = 28070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28070, 'data-value': derived.doubled }, children);
}
export default Component28070;
