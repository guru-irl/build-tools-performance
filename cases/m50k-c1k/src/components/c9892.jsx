import React from 'react';
const LABEL_9892 = 'component_9892';
export function Component9892({ value = 9892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9892, 'data-value': derived.doubled }, children);
}
export default Component9892;
