import React from 'react';
const LABEL_45619 = 'component_45619';
export function Component45619({ value = 45619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45619, 'data-value': derived.doubled }, children);
}
export default Component45619;
