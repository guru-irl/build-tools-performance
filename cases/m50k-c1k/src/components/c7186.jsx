import React from 'react';
const LABEL_7186 = 'component_7186';
export function Component7186({ value = 7186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7186, 'data-value': derived.doubled }, children);
}
export default Component7186;
