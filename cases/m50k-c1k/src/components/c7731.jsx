import React from 'react';
const LABEL_7731 = 'component_7731';
export function Component7731({ value = 7731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7731, 'data-value': derived.doubled }, children);
}
export default Component7731;
