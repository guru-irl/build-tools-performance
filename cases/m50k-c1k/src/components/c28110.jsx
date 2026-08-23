import React from 'react';
const LABEL_28110 = 'component_28110';
export function Component28110({ value = 28110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28110, 'data-value': derived.doubled }, children);
}
export default Component28110;
