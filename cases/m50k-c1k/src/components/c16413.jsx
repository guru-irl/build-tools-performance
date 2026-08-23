import React from 'react';
const LABEL_16413 = 'component_16413';
export function Component16413({ value = 16413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16413, 'data-value': derived.doubled }, children);
}
export default Component16413;
