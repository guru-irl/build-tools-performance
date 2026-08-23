import React from 'react';
const LABEL_45504 = 'component_45504';
export function Component45504({ value = 45504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45504, 'data-value': derived.doubled }, children);
}
export default Component45504;
