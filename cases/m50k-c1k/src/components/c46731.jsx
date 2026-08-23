import React from 'react';
const LABEL_46731 = 'component_46731';
export function Component46731({ value = 46731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46731, 'data-value': derived.doubled }, children);
}
export default Component46731;
