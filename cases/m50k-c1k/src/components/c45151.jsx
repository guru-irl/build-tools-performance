import React from 'react';
const LABEL_45151 = 'component_45151';
export function Component45151({ value = 45151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45151, 'data-value': derived.doubled }, children);
}
export default Component45151;
