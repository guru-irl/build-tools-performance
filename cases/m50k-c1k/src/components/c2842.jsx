import React from 'react';
const LABEL_2842 = 'component_2842';
export function Component2842({ value = 2842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2842, 'data-value': derived.doubled }, children);
}
export default Component2842;
