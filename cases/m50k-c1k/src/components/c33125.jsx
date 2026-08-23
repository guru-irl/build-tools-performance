import React from 'react';
const LABEL_33125 = 'component_33125';
export function Component33125({ value = 33125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33125, 'data-value': derived.doubled }, children);
}
export default Component33125;
