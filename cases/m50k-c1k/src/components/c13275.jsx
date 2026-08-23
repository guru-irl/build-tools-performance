import React from 'react';
const LABEL_13275 = 'component_13275';
export function Component13275({ value = 13275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13275, 'data-value': derived.doubled }, children);
}
export default Component13275;
