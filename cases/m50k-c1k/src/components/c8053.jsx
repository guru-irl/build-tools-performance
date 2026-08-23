import React from 'react';
const LABEL_8053 = 'component_8053';
export function Component8053({ value = 8053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8053, 'data-value': derived.doubled }, children);
}
export default Component8053;
