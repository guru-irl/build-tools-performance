import React from 'react';
const LABEL_18182 = 'component_18182';
export function Component18182({ value = 18182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18182, 'data-value': derived.doubled }, children);
}
export default Component18182;
