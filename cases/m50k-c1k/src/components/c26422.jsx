import React from 'react';
const LABEL_26422 = 'component_26422';
export function Component26422({ value = 26422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26422, 'data-value': derived.doubled }, children);
}
export default Component26422;
