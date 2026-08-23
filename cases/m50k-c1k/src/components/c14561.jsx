import React from 'react';
const LABEL_14561 = 'component_14561';
export function Component14561({ value = 14561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14561, 'data-value': derived.doubled }, children);
}
export default Component14561;
