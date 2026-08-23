import React from 'react';
const LABEL_9086 = 'component_9086';
export function Component9086({ value = 9086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9086, 'data-value': derived.doubled }, children);
}
export default Component9086;
