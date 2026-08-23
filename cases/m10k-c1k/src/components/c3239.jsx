import React from 'react';
const LABEL_3239 = 'component_3239';
export function Component3239({ value = 3239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3239, 'data-value': derived.doubled }, children);
}
export default Component3239;
