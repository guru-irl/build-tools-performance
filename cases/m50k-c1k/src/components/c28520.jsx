import React from 'react';
const LABEL_28520 = 'component_28520';
export function Component28520({ value = 28520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28520, 'data-value': derived.doubled }, children);
}
export default Component28520;
