import React from 'react';
const LABEL_29788 = 'component_29788';
export function Component29788({ value = 29788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29788, 'data-value': derived.doubled }, children);
}
export default Component29788;
