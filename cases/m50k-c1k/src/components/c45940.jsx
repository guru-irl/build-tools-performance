import React from 'react';
const LABEL_45940 = 'component_45940';
export function Component45940({ value = 45940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45940, 'data-value': derived.doubled }, children);
}
export default Component45940;
