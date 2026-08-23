import React from 'react';
const LABEL_12788 = 'component_12788';
export function Component12788({ value = 12788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12788, 'data-value': derived.doubled }, children);
}
export default Component12788;
