import React from 'react';
const LABEL_45429 = 'component_45429';
export function Component45429({ value = 45429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45429, 'data-value': derived.doubled }, children);
}
export default Component45429;
