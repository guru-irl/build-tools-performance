import React from 'react';
const LABEL_34147 = 'component_34147';
export function Component34147({ value = 34147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34147, 'data-value': derived.doubled }, children);
}
export default Component34147;
