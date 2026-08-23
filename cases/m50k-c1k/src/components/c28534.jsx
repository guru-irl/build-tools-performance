import React from 'react';
const LABEL_28534 = 'component_28534';
export function Component28534({ value = 28534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28534, 'data-value': derived.doubled }, children);
}
export default Component28534;
