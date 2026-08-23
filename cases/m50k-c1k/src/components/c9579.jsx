import React from 'react';
const LABEL_9579 = 'component_9579';
export function Component9579({ value = 9579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9579, 'data-value': derived.doubled }, children);
}
export default Component9579;
