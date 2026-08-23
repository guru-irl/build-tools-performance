import React from 'react';
const LABEL_31292 = 'component_31292';
export function Component31292({ value = 31292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31292, 'data-value': derived.doubled }, children);
}
export default Component31292;
