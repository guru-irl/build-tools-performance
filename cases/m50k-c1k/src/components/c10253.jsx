import React from 'react';
const LABEL_10253 = 'component_10253';
export function Component10253({ value = 10253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10253, 'data-value': derived.doubled }, children);
}
export default Component10253;
