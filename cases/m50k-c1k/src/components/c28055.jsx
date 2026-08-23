import React from 'react';
const LABEL_28055 = 'component_28055';
export function Component28055({ value = 28055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28055, 'data-value': derived.doubled }, children);
}
export default Component28055;
