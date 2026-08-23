import React from 'react';
const LABEL_45251 = 'component_45251';
export function Component45251({ value = 45251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45251, 'data-value': derived.doubled }, children);
}
export default Component45251;
