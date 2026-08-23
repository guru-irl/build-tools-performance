import React from 'react';
const LABEL_16666 = 'component_16666';
export function Component16666({ value = 16666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16666, 'data-value': derived.doubled }, children);
}
export default Component16666;
