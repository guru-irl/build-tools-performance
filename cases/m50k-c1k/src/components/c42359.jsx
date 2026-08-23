import React from 'react';
const LABEL_42359 = 'component_42359';
export function Component42359({ value = 42359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42359, 'data-value': derived.doubled }, children);
}
export default Component42359;
