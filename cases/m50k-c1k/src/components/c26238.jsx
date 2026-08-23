import React from 'react';
const LABEL_26238 = 'component_26238';
export function Component26238({ value = 26238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26238, 'data-value': derived.doubled }, children);
}
export default Component26238;
