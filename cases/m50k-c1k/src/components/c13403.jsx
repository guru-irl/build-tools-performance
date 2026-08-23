import React from 'react';
const LABEL_13403 = 'component_13403';
export function Component13403({ value = 13403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13403, 'data-value': derived.doubled }, children);
}
export default Component13403;
