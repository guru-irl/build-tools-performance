import React from 'react';
const LABEL_13554 = 'component_13554';
export function Component13554({ value = 13554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13554, 'data-value': derived.doubled }, children);
}
export default Component13554;
