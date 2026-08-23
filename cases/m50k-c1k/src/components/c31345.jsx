import React from 'react';
const LABEL_31345 = 'component_31345';
export function Component31345({ value = 31345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31345, 'data-value': derived.doubled }, children);
}
export default Component31345;
