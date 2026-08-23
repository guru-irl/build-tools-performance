import React from 'react';
const LABEL_45847 = 'component_45847';
export function Component45847({ value = 45847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45847, 'data-value': derived.doubled }, children);
}
export default Component45847;
