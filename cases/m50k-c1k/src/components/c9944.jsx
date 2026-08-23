import React from 'react';
const LABEL_9944 = 'component_9944';
export function Component9944({ value = 9944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9944, 'data-value': derived.doubled }, children);
}
export default Component9944;
