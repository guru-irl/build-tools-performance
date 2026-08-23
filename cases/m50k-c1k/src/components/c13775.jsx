import React from 'react';
const LABEL_13775 = 'component_13775';
export function Component13775({ value = 13775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13775, 'data-value': derived.doubled }, children);
}
export default Component13775;
