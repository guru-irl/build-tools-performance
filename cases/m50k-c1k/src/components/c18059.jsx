import React from 'react';
const LABEL_18059 = 'component_18059';
export function Component18059({ value = 18059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18059, 'data-value': derived.doubled }, children);
}
export default Component18059;
