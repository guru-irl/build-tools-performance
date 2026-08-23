import React from 'react';
const LABEL_9217 = 'component_9217';
export function Component9217({ value = 9217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9217, 'data-value': derived.doubled }, children);
}
export default Component9217;
