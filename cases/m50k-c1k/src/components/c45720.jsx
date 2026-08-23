import React from 'react';
const LABEL_45720 = 'component_45720';
export function Component45720({ value = 45720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45720, 'data-value': derived.doubled }, children);
}
export default Component45720;
