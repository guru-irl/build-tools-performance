import React from 'react';
const LABEL_42893 = 'component_42893';
export function Component42893({ value = 42893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42893, 'data-value': derived.doubled }, children);
}
export default Component42893;
