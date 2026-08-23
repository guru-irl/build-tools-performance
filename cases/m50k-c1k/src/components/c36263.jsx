import React from 'react';
const LABEL_36263 = 'component_36263';
export function Component36263({ value = 36263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36263, 'data-value': derived.doubled }, children);
}
export default Component36263;
