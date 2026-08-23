import React from 'react';
const LABEL_45676 = 'component_45676';
export function Component45676({ value = 45676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45676, 'data-value': derived.doubled }, children);
}
export default Component45676;
