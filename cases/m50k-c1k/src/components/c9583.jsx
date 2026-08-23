import React from 'react';
const LABEL_9583 = 'component_9583';
export function Component9583({ value = 9583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9583, 'data-value': derived.doubled }, children);
}
export default Component9583;
