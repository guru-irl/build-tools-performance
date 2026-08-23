import React from 'react';
const LABEL_31417 = 'component_31417';
export function Component31417({ value = 31417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31417, 'data-value': derived.doubled }, children);
}
export default Component31417;
