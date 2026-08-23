import React from 'react';
const LABEL_18342 = 'component_18342';
export function Component18342({ value = 18342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18342, 'data-value': derived.doubled }, children);
}
export default Component18342;
