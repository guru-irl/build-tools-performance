import React from 'react';
const LABEL_45268 = 'component_45268';
export function Component45268({ value = 45268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45268, 'data-value': derived.doubled }, children);
}
export default Component45268;
