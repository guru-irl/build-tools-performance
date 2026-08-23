import React from 'react';
const LABEL_46181 = 'component_46181';
export function Component46181({ value = 46181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46181, 'data-value': derived.doubled }, children);
}
export default Component46181;
