import React from 'react';
const LABEL_33500 = 'component_33500';
export function Component33500({ value = 33500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33500, 'data-value': derived.doubled }, children);
}
export default Component33500;
