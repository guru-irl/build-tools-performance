import React from 'react';
const LABEL_5359 = 'component_5359';
export function Component5359({ value = 5359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5359, 'data-value': derived.doubled }, children);
}
export default Component5359;
