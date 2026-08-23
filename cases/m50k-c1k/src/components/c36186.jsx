import React from 'react';
const LABEL_36186 = 'component_36186';
export function Component36186({ value = 36186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36186, 'data-value': derived.doubled }, children);
}
export default Component36186;
