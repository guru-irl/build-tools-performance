import React from 'react';
const LABEL_11253 = 'component_11253';
export function Component11253({ value = 11253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11253, 'data-value': derived.doubled }, children);
}
export default Component11253;
