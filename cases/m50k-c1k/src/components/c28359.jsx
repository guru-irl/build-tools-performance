import React from 'react';
const LABEL_28359 = 'component_28359';
export function Component28359({ value = 28359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28359, 'data-value': derived.doubled }, children);
}
export default Component28359;
