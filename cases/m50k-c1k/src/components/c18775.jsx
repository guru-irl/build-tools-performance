import React from 'react';
const LABEL_18775 = 'component_18775';
export function Component18775({ value = 18775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18775, 'data-value': derived.doubled }, children);
}
export default Component18775;
