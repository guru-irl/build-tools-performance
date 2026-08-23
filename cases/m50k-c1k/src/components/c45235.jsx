import React from 'react';
const LABEL_45235 = 'component_45235';
export function Component45235({ value = 45235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45235, 'data-value': derived.doubled }, children);
}
export default Component45235;
