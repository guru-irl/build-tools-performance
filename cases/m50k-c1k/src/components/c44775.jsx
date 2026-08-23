import React from 'react';
const LABEL_44775 = 'component_44775';
export function Component44775({ value = 44775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44775, 'data-value': derived.doubled }, children);
}
export default Component44775;
