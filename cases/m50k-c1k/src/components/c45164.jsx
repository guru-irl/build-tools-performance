import React from 'react';
const LABEL_45164 = 'component_45164';
export function Component45164({ value = 45164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45164, 'data-value': derived.doubled }, children);
}
export default Component45164;
