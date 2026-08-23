import React from 'react';
const LABEL_33259 = 'component_33259';
export function Component33259({ value = 33259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33259, 'data-value': derived.doubled }, children);
}
export default Component33259;
