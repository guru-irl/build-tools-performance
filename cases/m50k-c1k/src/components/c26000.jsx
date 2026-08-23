import React from 'react';
const LABEL_26000 = 'component_26000';
export function Component26000({ value = 26000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26000, 'data-value': derived.doubled }, children);
}
export default Component26000;
