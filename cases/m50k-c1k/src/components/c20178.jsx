import React from 'react';
const LABEL_20178 = 'component_20178';
export function Component20178({ value = 20178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20178, 'data-value': derived.doubled }, children);
}
export default Component20178;
