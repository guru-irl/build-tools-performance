import React from 'react';
const LABEL_38362 = 'component_38362';
export function Component38362({ value = 38362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38362, 'data-value': derived.doubled }, children);
}
export default Component38362;
