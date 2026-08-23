import React from 'react';
const LABEL_24489 = 'component_24489';
export function Component24489({ value = 24489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24489, 'data-value': derived.doubled }, children);
}
export default Component24489;
