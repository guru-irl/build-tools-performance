import React from 'react';
const LABEL_33312 = 'component_33312';
export function Component33312({ value = 33312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33312, 'data-value': derived.doubled }, children);
}
export default Component33312;
