import React from 'react';
const LABEL_26347 = 'component_26347';
export function Component26347({ value = 26347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26347, 'data-value': derived.doubled }, children);
}
export default Component26347;
