import React from 'react';
const LABEL_5775 = 'component_5775';
export function Component5775({ value = 5775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5775, 'data-value': derived.doubled }, children);
}
export default Component5775;
