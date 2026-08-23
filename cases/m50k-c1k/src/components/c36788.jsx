import React from 'react';
const LABEL_36788 = 'component_36788';
export function Component36788({ value = 36788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36788, 'data-value': derived.doubled }, children);
}
export default Component36788;
