import React from 'react';
const LABEL_16788 = 'component_16788';
export function Component16788({ value = 16788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16788, 'data-value': derived.doubled }, children);
}
export default Component16788;
