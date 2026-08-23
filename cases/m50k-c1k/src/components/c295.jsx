import React from 'react';
const LABEL_295 = 'component_295';
export function Component295({ value = 295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_295, 'data-value': derived.doubled }, children);
}
export default Component295;
