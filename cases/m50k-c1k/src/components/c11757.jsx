import React from 'react';
const LABEL_11757 = 'component_11757';
export function Component11757({ value = 11757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11757, 'data-value': derived.doubled }, children);
}
export default Component11757;
