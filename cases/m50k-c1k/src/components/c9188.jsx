import React from 'react';
const LABEL_9188 = 'component_9188';
export function Component9188({ value = 9188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9188, 'data-value': derived.doubled }, children);
}
export default Component9188;
