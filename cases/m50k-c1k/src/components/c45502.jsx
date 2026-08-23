import React from 'react';
const LABEL_45502 = 'component_45502';
export function Component45502({ value = 45502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45502, 'data-value': derived.doubled }, children);
}
export default Component45502;
