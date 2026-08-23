import React from 'react';
const LABEL_3292 = 'component_3292';
export function Component3292({ value = 3292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3292, 'data-value': derived.doubled }, children);
}
export default Component3292;
