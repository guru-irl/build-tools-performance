import React from 'react';
const LABEL_9586 = 'component_9586';
export function Component9586({ value = 9586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9586, 'data-value': derived.doubled }, children);
}
export default Component9586;
