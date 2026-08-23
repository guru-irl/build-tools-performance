import React from 'react';
const LABEL_26788 = 'component_26788';
export function Component26788({ value = 26788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26788, 'data-value': derived.doubled }, children);
}
export default Component26788;
