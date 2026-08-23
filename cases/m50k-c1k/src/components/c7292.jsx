import React from 'react';
const LABEL_7292 = 'component_7292';
export function Component7292({ value = 7292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7292, 'data-value': derived.doubled }, children);
}
export default Component7292;
