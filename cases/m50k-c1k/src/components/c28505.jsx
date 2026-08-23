import React from 'react';
const LABEL_28505 = 'component_28505';
export function Component28505({ value = 28505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28505, 'data-value': derived.doubled }, children);
}
export default Component28505;
