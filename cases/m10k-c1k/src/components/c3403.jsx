import React from 'react';
const LABEL_3403 = 'component_3403';
export function Component3403({ value = 3403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3403, 'data-value': derived.doubled }, children);
}
export default Component3403;
