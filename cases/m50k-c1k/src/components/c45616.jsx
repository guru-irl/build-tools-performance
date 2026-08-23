import React from 'react';
const LABEL_45616 = 'component_45616';
export function Component45616({ value = 45616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45616, 'data-value': derived.doubled }, children);
}
export default Component45616;
