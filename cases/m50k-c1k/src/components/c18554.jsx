import React from 'react';
const LABEL_18554 = 'component_18554';
export function Component18554({ value = 18554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18554, 'data-value': derived.doubled }, children);
}
export default Component18554;
