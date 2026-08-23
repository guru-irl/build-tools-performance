import React from 'react';
const LABEL_3033 = 'component_3033';
export function Component3033({ value = 3033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3033, 'data-value': derived.doubled }, children);
}
export default Component3033;
