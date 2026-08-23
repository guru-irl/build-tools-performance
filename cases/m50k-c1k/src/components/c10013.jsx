import React from 'react';
const LABEL_10013 = 'component_10013';
export function Component10013({ value = 10013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10013, 'data-value': derived.doubled }, children);
}
export default Component10013;
