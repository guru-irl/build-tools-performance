import React from 'react';
const LABEL_15788 = 'component_15788';
export function Component15788({ value = 15788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15788, 'data-value': derived.doubled }, children);
}
export default Component15788;
