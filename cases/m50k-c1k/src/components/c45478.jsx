import React from 'react';
const LABEL_45478 = 'component_45478';
export function Component45478({ value = 45478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45478, 'data-value': derived.doubled }, children);
}
export default Component45478;
