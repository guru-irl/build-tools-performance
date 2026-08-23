import React from 'react';
const LABEL_18080 = 'component_18080';
export function Component18080({ value = 18080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18080, 'data-value': derived.doubled }, children);
}
export default Component18080;
