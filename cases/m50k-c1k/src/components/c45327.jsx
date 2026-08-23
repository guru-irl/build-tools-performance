import React from 'react';
const LABEL_45327 = 'component_45327';
export function Component45327({ value = 45327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45327, 'data-value': derived.doubled }, children);
}
export default Component45327;
