import React from 'react';
const LABEL_33775 = 'component_33775';
export function Component33775({ value = 33775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33775, 'data-value': derived.doubled }, children);
}
export default Component33775;
