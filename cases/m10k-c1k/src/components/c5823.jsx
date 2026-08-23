import React from 'react';
const LABEL_5823 = 'component_5823';
export function Component5823({ value = 5823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5823, 'data-value': derived.doubled }, children);
}
export default Component5823;
