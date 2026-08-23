import React from 'react';
const LABEL_34027 = 'component_34027';
export function Component34027({ value = 34027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34027, 'data-value': derived.doubled }, children);
}
export default Component34027;
