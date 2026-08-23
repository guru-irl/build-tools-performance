import React from 'react';
const LABEL_26239 = 'component_26239';
export function Component26239({ value = 26239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26239, 'data-value': derived.doubled }, children);
}
export default Component26239;
