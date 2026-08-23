import React from 'react';
const LABEL_24666 = 'component_24666';
export function Component24666({ value = 24666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24666, 'data-value': derived.doubled }, children);
}
export default Component24666;
