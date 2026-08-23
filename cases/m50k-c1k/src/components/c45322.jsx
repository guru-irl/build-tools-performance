import React from 'react';
const LABEL_45322 = 'component_45322';
export function Component45322({ value = 45322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45322, 'data-value': derived.doubled }, children);
}
export default Component45322;
