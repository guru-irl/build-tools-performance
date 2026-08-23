import React from 'react';
const LABEL_45125 = 'component_45125';
export function Component45125({ value = 45125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45125, 'data-value': derived.doubled }, children);
}
export default Component45125;
