import React from 'react';
const LABEL_10775 = 'component_10775';
export function Component10775({ value = 10775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10775, 'data-value': derived.doubled }, children);
}
export default Component10775;
