import React from 'react';
const LABEL_18313 = 'component_18313';
export function Component18313({ value = 18313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18313, 'data-value': derived.doubled }, children);
}
export default Component18313;
