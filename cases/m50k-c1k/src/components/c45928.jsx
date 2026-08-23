import React from 'react';
const LABEL_45928 = 'component_45928';
export function Component45928({ value = 45928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45928, 'data-value': derived.doubled }, children);
}
export default Component45928;
