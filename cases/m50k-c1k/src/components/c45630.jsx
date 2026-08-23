import React from 'react';
const LABEL_45630 = 'component_45630';
export function Component45630({ value = 45630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45630, 'data-value': derived.doubled }, children);
}
export default Component45630;
