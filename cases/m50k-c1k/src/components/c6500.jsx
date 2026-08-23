import React from 'react';
const LABEL_6500 = 'component_6500';
export function Component6500({ value = 6500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6500, 'data-value': derived.doubled }, children);
}
export default Component6500;
