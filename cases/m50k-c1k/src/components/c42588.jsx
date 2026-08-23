import React from 'react';
const LABEL_42588 = 'component_42588';
export function Component42588({ value = 42588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42588, 'data-value': derived.doubled }, children);
}
export default Component42588;
