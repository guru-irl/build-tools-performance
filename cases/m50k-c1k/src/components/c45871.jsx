import React from 'react';
const LABEL_45871 = 'component_45871';
export function Component45871({ value = 45871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45871, 'data-value': derived.doubled }, children);
}
export default Component45871;
