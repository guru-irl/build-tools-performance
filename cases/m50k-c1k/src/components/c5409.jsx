import React from 'react';
const LABEL_5409 = 'component_5409';
export function Component5409({ value = 5409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5409, 'data-value': derived.doubled }, children);
}
export default Component5409;
