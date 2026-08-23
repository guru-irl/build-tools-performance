import React from 'react';
const LABEL_8359 = 'component_8359';
export function Component8359({ value = 8359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8359, 'data-value': derived.doubled }, children);
}
export default Component8359;
