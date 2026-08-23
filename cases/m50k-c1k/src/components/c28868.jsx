import React from 'react';
const LABEL_28868 = 'component_28868';
export function Component28868({ value = 28868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28868, 'data-value': derived.doubled }, children);
}
export default Component28868;
