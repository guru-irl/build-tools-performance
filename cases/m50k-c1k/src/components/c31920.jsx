import React from 'react';
const LABEL_31920 = 'component_31920';
export function Component31920({ value = 31920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31920, 'data-value': derived.doubled }, children);
}
export default Component31920;
