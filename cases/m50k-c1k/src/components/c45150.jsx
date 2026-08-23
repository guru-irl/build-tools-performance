import React from 'react';
const LABEL_45150 = 'component_45150';
export function Component45150({ value = 45150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45150, 'data-value': derived.doubled }, children);
}
export default Component45150;
