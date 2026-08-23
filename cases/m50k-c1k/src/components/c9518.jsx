import React from 'react';
const LABEL_9518 = 'component_9518';
export function Component9518({ value = 9518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9518, 'data-value': derived.doubled }, children);
}
export default Component9518;
