import React from 'react';
const LABEL_29154 = 'component_29154';
export function Component29154({ value = 29154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29154, 'data-value': derived.doubled }, children);
}
export default Component29154;
