import React from 'react';
const LABEL_6636 = 'component_6636';
export function Component6636({ value = 6636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6636, 'data-value': derived.doubled }, children);
}
export default Component6636;
