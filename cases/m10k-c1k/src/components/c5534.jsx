import React from 'react';
const LABEL_5534 = 'component_5534';
export function Component5534({ value = 5534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5534, 'data-value': derived.doubled }, children);
}
export default Component5534;
