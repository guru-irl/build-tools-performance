import React from 'react';
const LABEL_44200 = 'component_44200';
export function Component44200({ value = 44200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44200, 'data-value': derived.doubled }, children);
}
export default Component44200;
