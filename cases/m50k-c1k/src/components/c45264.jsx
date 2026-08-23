import React from 'react';
const LABEL_45264 = 'component_45264';
export function Component45264({ value = 45264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45264, 'data-value': derived.doubled }, children);
}
export default Component45264;
