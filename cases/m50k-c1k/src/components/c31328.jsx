import React from 'react';
const LABEL_31328 = 'component_31328';
export function Component31328({ value = 31328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31328, 'data-value': derived.doubled }, children);
}
export default Component31328;
