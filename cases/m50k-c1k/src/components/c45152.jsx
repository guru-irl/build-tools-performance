import React from 'react';
const LABEL_45152 = 'component_45152';
export function Component45152({ value = 45152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45152, 'data-value': derived.doubled }, children);
}
export default Component45152;
