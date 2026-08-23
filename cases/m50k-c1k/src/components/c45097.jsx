import React from 'react';
const LABEL_45097 = 'component_45097';
export function Component45097({ value = 45097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45097, 'data-value': derived.doubled }, children);
}
export default Component45097;
