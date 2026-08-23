import React from 'react';
const LABEL_34122 = 'component_34122';
export function Component34122({ value = 34122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34122, 'data-value': derived.doubled }, children);
}
export default Component34122;
