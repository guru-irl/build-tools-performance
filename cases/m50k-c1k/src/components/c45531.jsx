import React from 'react';
const LABEL_45531 = 'component_45531';
export function Component45531({ value = 45531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45531, 'data-value': derived.doubled }, children);
}
export default Component45531;
