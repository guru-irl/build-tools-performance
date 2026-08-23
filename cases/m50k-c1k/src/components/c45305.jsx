import React from 'react';
const LABEL_45305 = 'component_45305';
export function Component45305({ value = 45305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45305, 'data-value': derived.doubled }, children);
}
export default Component45305;
