import React from 'react';
const LABEL_23527 = 'component_23527';
export function Component23527({ value = 23527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23527, 'data-value': derived.doubled }, children);
}
export default Component23527;
