import React from 'react';
const LABEL_9207 = 'component_9207';
export function Component9207({ value = 9207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9207, 'data-value': derived.doubled }, children);
}
export default Component9207;
