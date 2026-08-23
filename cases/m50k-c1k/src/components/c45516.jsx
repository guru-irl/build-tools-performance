import React from 'react';
const LABEL_45516 = 'component_45516';
export function Component45516({ value = 45516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45516, 'data-value': derived.doubled }, children);
}
export default Component45516;
