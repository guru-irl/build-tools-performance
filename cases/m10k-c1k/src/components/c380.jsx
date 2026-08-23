import React from 'react';
const LABEL_380 = 'component_380';
export function Component380({ value = 380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_380, 'data-value': derived.doubled }, children);
}
export default Component380;
