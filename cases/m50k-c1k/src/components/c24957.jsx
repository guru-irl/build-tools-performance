import React from 'react';
const LABEL_24957 = 'component_24957';
export function Component24957({ value = 24957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24957, 'data-value': derived.doubled }, children);
}
export default Component24957;
