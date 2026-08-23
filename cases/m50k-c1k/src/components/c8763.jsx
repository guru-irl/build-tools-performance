import React from 'react';
const LABEL_8763 = 'component_8763';
export function Component8763({ value = 8763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8763, 'data-value': derived.doubled }, children);
}
export default Component8763;
