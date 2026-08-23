import React from 'react';
const LABEL_34763 = 'component_34763';
export function Component34763({ value = 34763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34763, 'data-value': derived.doubled }, children);
}
export default Component34763;
