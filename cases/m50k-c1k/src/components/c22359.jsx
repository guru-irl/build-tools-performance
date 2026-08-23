import React from 'react';
const LABEL_22359 = 'component_22359';
export function Component22359({ value = 22359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22359, 'data-value': derived.doubled }, children);
}
export default Component22359;
