import React from 'react';
const LABEL_28775 = 'component_28775';
export function Component28775({ value = 28775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28775, 'data-value': derived.doubled }, children);
}
export default Component28775;
