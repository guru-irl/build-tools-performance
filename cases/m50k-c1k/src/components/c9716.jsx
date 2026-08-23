import React from 'react';
const LABEL_9716 = 'component_9716';
export function Component9716({ value = 9716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9716, 'data-value': derived.doubled }, children);
}
export default Component9716;
