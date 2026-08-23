import React from 'react';
const LABEL_45600 = 'component_45600';
export function Component45600({ value = 45600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45600, 'data-value': derived.doubled }, children);
}
export default Component45600;
