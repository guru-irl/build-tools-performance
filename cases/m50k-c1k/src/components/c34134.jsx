import React from 'react';
const LABEL_34134 = 'component_34134';
export function Component34134({ value = 34134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34134, 'data-value': derived.doubled }, children);
}
export default Component34134;
