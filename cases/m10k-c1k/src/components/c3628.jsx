import React from 'react';
const LABEL_3628 = 'component_3628';
export function Component3628({ value = 3628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3628, 'data-value': derived.doubled }, children);
}
export default Component3628;
