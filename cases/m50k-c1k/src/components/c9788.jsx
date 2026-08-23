import React from 'react';
const LABEL_9788 = 'component_9788';
export function Component9788({ value = 9788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9788, 'data-value': derived.doubled }, children);
}
export default Component9788;
