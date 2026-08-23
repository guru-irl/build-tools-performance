import React from 'react';
const LABEL_7534 = 'component_7534';
export function Component7534({ value = 7534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7534, 'data-value': derived.doubled }, children);
}
export default Component7534;
