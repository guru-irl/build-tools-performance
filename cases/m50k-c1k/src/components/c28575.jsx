import React from 'react';
const LABEL_28575 = 'component_28575';
export function Component28575({ value = 28575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28575, 'data-value': derived.doubled }, children);
}
export default Component28575;
