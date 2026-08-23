import React from 'react';
const LABEL_33506 = 'component_33506';
export function Component33506({ value = 33506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33506, 'data-value': derived.doubled }, children);
}
export default Component33506;
