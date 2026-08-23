import React from 'react';
const LABEL_46098 = 'component_46098';
export function Component46098({ value = 46098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46098, 'data-value': derived.doubled }, children);
}
export default Component46098;
