import React from 'react';
const LABEL_44871 = 'component_44871';
export function Component44871({ value = 44871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44871, 'data-value': derived.doubled }, children);
}
export default Component44871;
