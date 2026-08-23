import React from 'react';
const LABEL_36591 = 'component_36591';
export function Component36591({ value = 36591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36591, 'data-value': derived.doubled }, children);
}
export default Component36591;
