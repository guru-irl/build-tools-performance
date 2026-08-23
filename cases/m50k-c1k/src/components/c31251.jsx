import React from 'react';
const LABEL_31251 = 'component_31251';
export function Component31251({ value = 31251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31251, 'data-value': derived.doubled }, children);
}
export default Component31251;
