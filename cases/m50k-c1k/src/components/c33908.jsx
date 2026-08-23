import React from 'react';
const LABEL_33908 = 'component_33908';
export function Component33908({ value = 33908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33908, 'data-value': derived.doubled }, children);
}
export default Component33908;
