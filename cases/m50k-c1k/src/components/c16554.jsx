import React from 'react';
const LABEL_16554 = 'component_16554';
export function Component16554({ value = 16554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16554, 'data-value': derived.doubled }, children);
}
export default Component16554;
