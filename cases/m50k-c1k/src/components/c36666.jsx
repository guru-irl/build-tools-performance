import React from 'react';
const LABEL_36666 = 'component_36666';
export function Component36666({ value = 36666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36666, 'data-value': derived.doubled }, children);
}
export default Component36666;
