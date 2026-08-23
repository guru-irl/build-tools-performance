import React from 'react';
const LABEL_45608 = 'component_45608';
export function Component45608({ value = 45608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45608, 'data-value': derived.doubled }, children);
}
export default Component45608;
