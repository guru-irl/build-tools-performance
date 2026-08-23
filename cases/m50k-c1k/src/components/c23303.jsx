import React from 'react';
const LABEL_23303 = 'component_23303';
export function Component23303({ value = 23303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23303, 'data-value': derived.doubled }, children);
}
export default Component23303;
