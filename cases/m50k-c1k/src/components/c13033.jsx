import React from 'react';
const LABEL_13033 = 'component_13033';
export function Component13033({ value = 13033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13033, 'data-value': derived.doubled }, children);
}
export default Component13033;
