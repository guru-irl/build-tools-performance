import React from 'react';
const LABEL_6506 = 'component_6506';
export function Component6506({ value = 6506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6506, 'data-value': derived.doubled }, children);
}
export default Component6506;
