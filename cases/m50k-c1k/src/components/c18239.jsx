import React from 'react';
const LABEL_18239 = 'component_18239';
export function Component18239({ value = 18239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18239, 'data-value': derived.doubled }, children);
}
export default Component18239;
