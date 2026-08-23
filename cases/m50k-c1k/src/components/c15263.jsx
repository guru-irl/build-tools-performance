import React from 'react';
const LABEL_15263 = 'component_15263';
export function Component15263({ value = 15263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15263, 'data-value': derived.doubled }, children);
}
export default Component15263;
