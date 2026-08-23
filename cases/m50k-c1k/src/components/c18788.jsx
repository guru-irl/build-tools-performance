import React from 'react';
const LABEL_18788 = 'component_18788';
export function Component18788({ value = 18788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18788, 'data-value': derived.doubled }, children);
}
export default Component18788;
