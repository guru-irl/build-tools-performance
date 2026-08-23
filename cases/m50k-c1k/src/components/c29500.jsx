import React from 'react';
const LABEL_29500 = 'component_29500';
export function Component29500({ value = 29500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29500, 'data-value': derived.doubled }, children);
}
export default Component29500;
