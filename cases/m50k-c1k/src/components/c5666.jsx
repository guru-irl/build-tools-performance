import React from 'react';
const LABEL_5666 = 'component_5666';
export function Component5666({ value = 5666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5666, 'data-value': derived.doubled }, children);
}
export default Component5666;
