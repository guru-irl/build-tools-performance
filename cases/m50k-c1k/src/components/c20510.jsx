import React from 'react';
const LABEL_20510 = 'component_20510';
export function Component20510({ value = 20510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20510, 'data-value': derived.doubled }, children);
}
export default Component20510;
