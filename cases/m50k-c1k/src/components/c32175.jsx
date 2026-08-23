import React from 'react';
const LABEL_32175 = 'component_32175';
export function Component32175({ value = 32175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32175, 'data-value': derived.doubled }, children);
}
export default Component32175;
