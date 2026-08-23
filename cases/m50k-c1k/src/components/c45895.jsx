import React from 'react';
const LABEL_45895 = 'component_45895';
export function Component45895({ value = 45895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45895, 'data-value': derived.doubled }, children);
}
export default Component45895;
