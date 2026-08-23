import React from 'react';
const LABEL_6908 = 'component_6908';
export function Component6908({ value = 6908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6908, 'data-value': derived.doubled }, children);
}
export default Component6908;
