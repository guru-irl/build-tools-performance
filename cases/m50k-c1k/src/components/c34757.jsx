import React from 'react';
const LABEL_34757 = 'component_34757';
export function Component34757({ value = 34757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34757, 'data-value': derived.doubled }, children);
}
export default Component34757;
