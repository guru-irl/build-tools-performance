import React from 'react';
const LABEL_42788 = 'component_42788';
export function Component42788({ value = 42788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42788, 'data-value': derived.doubled }, children);
}
export default Component42788;
