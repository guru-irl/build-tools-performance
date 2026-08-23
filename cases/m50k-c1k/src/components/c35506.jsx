import React from 'react';
const LABEL_35506 = 'component_35506';
export function Component35506({ value = 35506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35506, 'data-value': derived.doubled }, children);
}
export default Component35506;
