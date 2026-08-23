import React from 'react';
const LABEL_45250 = 'component_45250';
export function Component45250({ value = 45250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45250, 'data-value': derived.doubled }, children);
}
export default Component45250;
