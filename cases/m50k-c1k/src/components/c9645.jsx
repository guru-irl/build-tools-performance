import React from 'react';
const LABEL_9645 = 'component_9645';
export function Component9645({ value = 9645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9645, 'data-value': derived.doubled }, children);
}
export default Component9645;
