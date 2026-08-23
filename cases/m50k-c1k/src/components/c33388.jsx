import React from 'react';
const LABEL_33388 = 'component_33388';
export function Component33388({ value = 33388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33388, 'data-value': derived.doubled }, children);
}
export default Component33388;
