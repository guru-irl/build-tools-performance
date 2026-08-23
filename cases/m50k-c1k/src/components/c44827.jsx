import React from 'react';
const LABEL_44827 = 'component_44827';
export function Component44827({ value = 44827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44827, 'data-value': derived.doubled }, children);
}
export default Component44827;
