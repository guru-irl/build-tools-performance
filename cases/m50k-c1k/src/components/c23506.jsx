import React from 'react';
const LABEL_23506 = 'component_23506';
export function Component23506({ value = 23506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23506, 'data-value': derived.doubled }, children);
}
export default Component23506;
