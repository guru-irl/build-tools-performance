import React from 'react';
const LABEL_5186 = 'component_5186';
export function Component5186({ value = 5186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5186, 'data-value': derived.doubled }, children);
}
export default Component5186;
