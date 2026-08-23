import React from 'react';
const LABEL_7263 = 'component_7263';
export function Component7263({ value = 7263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7263, 'data-value': derived.doubled }, children);
}
export default Component7263;
