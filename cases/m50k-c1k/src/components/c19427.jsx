import React from 'react';
const LABEL_19427 = 'component_19427';
export function Component19427({ value = 19427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19427, 'data-value': derived.doubled }, children);
}
export default Component19427;
