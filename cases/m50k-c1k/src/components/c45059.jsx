import React from 'react';
const LABEL_45059 = 'component_45059';
export function Component45059({ value = 45059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45059, 'data-value': derived.doubled }, children);
}
export default Component45059;
