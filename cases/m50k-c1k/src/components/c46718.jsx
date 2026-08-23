import React from 'react';
const LABEL_46718 = 'component_46718';
export function Component46718({ value = 46718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46718, 'data-value': derived.doubled }, children);
}
export default Component46718;
