import React from 'react';
const LABEL_9319 = 'component_9319';
export function Component9319({ value = 9319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9319, 'data-value': derived.doubled }, children);
}
export default Component9319;
