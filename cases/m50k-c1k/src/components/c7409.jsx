import React from 'react';
const LABEL_7409 = 'component_7409';
export function Component7409({ value = 7409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7409, 'data-value': derived.doubled }, children);
}
export default Component7409;
