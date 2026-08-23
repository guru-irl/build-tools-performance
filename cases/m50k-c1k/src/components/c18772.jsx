import React from 'react';
const LABEL_18772 = 'component_18772';
export function Component18772({ value = 18772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18772, 'data-value': derived.doubled }, children);
}
export default Component18772;
