import React from 'react';
const LABEL_3775 = 'component_3775';
export function Component3775({ value = 3775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3775, 'data-value': derived.doubled }, children);
}
export default Component3775;
