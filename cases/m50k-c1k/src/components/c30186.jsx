import React from 'react';
const LABEL_30186 = 'component_30186';
export function Component30186({ value = 30186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30186, 'data-value': derived.doubled }, children);
}
export default Component30186;
