import React from 'react';
const LABEL_14850 = 'component_14850';
export function Component14850({ value = 14850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14850, 'data-value': derived.doubled }, children);
}
export default Component14850;
