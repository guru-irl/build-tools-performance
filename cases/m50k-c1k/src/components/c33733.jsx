import React from 'react';
const LABEL_33733 = 'component_33733';
export function Component33733({ value = 33733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33733, 'data-value': derived.doubled }, children);
}
export default Component33733;
