import React from 'react';
const LABEL_45471 = 'component_45471';
export function Component45471({ value = 45471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45471, 'data-value': derived.doubled }, children);
}
export default Component45471;
