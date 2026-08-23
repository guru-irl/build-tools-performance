import React from 'react';
const LABEL_9020 = 'component_9020';
export function Component9020({ value = 9020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9020, 'data-value': derived.doubled }, children);
}
export default Component9020;
