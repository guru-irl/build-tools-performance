import React from 'react';
const LABEL_14079 = 'component_14079';
export function Component14079({ value = 14079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14079, 'data-value': derived.doubled }, children);
}
export default Component14079;
